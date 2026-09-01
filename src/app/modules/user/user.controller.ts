import type { NextFunction, Request, RequestHandler, Response } from "express";
import { userService } from "./user.service";
import sendResponse from "../../utils/sendResponse";
import catchAsync from "../../utils/catchAsync";


const createAdmin = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  //console.log("params", req.params);
  // console.log("data", data);
  const result = await userService.createAdmin(data);
  sendResponse(res, {
    statusCode: 200,
    success: "true",
    message: "Admin created successfully",
    data: result,
  });
});

export const userController = {
  createAdmin,
};
