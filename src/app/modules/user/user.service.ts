import { prisma } from "../../../lib/prisma";
import bcrypt from "bcrypt";


const createAdmin = async (data: any) => {
  const hasPassword = await bcrypt.hash(data.password, 12);
  
  const userData = {
    email: data.admin.email,
    password: hasPassword,
    role: 'ADMIN'
  };
  console.log("data", userData);

  const result = await prisma.$transaction(async (tx:any) => {
     await tx.user.create({
      data: userData,
    });

    const admin = await tx.admin.create({
      data: data.admin,
    });

    return admin
  });

  return result;
};
  
export const userService = {
  createAdmin,
};
