import { prisma } from "../../../lib/prisma"



const getAllAdmins = async (params: any) => {
  const admins = await prisma.admin.findMany({
    where: {
      name: {
        contains: params.searchTerm,
        mode: "insensitive"
      }
    },
  })
  return admins;
}

const getAdminById = async (id: string) => {
  const admin = await prisma.admin.findUnique({
    where: { id },
  });
  return admin;
};

export const adminService = {
  getAllAdmins,
  getAdminById,
};