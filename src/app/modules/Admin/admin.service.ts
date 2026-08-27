import { prisma } from "../../../lib/prisma";

const getAllAdmins = async (params: any) => {
  const admins = await prisma.admin.findMany({
    where: {
      name: {
        contains: params.searchTerm,
        mode: "insensitive",
      },
      isdeleted: false,
    },
  });
  return admins;
};

const getAdminById = async (id: string) => {
  const admin = await prisma.admin.findUnique({
    where: { 
      id ,
      isdeleted: false,
    },
  });
  return admin;
};

const updateAdminData = async (id: string, data: any) => {
  const adminExists = await prisma.admin.findUniqueOrThrow({
    where: { 
      id ,
      isdeleted: false,
    },
    
  });
  if (!adminExists) {
    throw new Error("Admin not found");
  }
  console.log(adminExists);

  const result = await prisma.admin.update({
    where: {
      id,
      isdeleted: false,
    },
    data,
  });

  console.log("data", data);
  return result;
};

const deleteAdminById = async (id: string) => {
  const adminExists = await prisma.admin.findUnique({
    where: { id },
  });
  if (!adminExists) {
    throw new Error("Admin not found");
  }

  console.log("adminExists", adminExists);

  const result = await prisma.$transaction(async (tran) => {
    await tran.admin.delete({
      where: { id },
    });
    const user = await tran.user.delete({
      where: { email: adminExists.email }, // Assuming the email is used as the user ID
    });
    console.log(user);
    return user;
  });
  return result;
};

const softdeleteAdminById = async (id: string) => {
  await prisma.admin.findUniqueOrThrow({
    where: { id },
  });
  const result = await prisma.admin.update({
    where: { id },
    data: { isdeleted: true },
  });
  return result;
};

export const adminService = {
  getAllAdmins,
  getAdminById,
  deleteAdminById,
  softdeleteAdminById,
  updateAdminData,
};
