import type { Request, Response } from "express";
import { userService } from "./user.service";
import sendResponse from "../../utils/sendResponse";

const createAdmin = async (req: Request, res: Response) => {
  const data = req.body;
  //console.log("params", req.params);
  // console.log("data", data);
  try {
    const result = await userService.createAdmin(data);
    sendResponse(res, {
      statusCode: 200,
      success: "true",
      message: "Admin created successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: "false",
      message: "Failed to create admin",
      error: error instanceof Error ? error.message : String(error),
    });
  }
};

export const userController = {
  createAdmin,
};
