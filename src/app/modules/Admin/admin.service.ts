import { prisma } from "../../../lib/prisma"



const getAllAdmins = async () => {
  const admins = await prisma.admin.findMany()
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