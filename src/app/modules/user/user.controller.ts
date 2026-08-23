import type { Request, Response } from "express";
import { userService } from "./user.service";

const createAdmin = async (req: Request, res: Response) => {
  const data = req.body;
  //console.log("params", req.params);
  // console.log("data", data);
  try {
    const result = await userService.createAdmin(data);
    res.status(200).json({
      success: true,
      message: "Admin created successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create admin",
        error: (error as Error).message,
    });
  }
};



export const userController = {
  createAdmin,
};