import type { Request, Response } from "express";
import { adminService } from "./admin.service";
import sendResponse from "../../utils/sendResponse";
import status from "http-status";
import catchAsync from "../../utils/catchAsync";

const getAllAdmins = catchAsync(async (req: Request, res: Response) => {
  console.log("QUERY", req.query);

  //console.log("PARAMS", req.params);

  const result = await adminService.getAllAdmins(req.query);
  sendResponse(res, {
    statusCode: status.OK,
    success: "true",
    message: "Admins fetched successfully",
    meta: {
      total: result.count,
    },
    data: result.admins,
  });
});

const getAdminById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  //   console.log("params", req.body);

  const admin = await adminService.getAdminById(id as string);
  if (!admin) {
    return res.status(status.NOT_FOUND).json({
      success: false,
      message: "Admin not found",
    });
  }
  sendResponse(res, {
    statusCode: status.OK,
    success: "true",
    message: "Admin fetched successfully",
    data: admin,
  });
});

const updateAdminData = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;

    const result = await adminService.updateAdminData(id as string, data);
  sendResponse(res, {
    statusCode: status.OK,
    success: "true",
    message: "Admin data updated successfully",
    data: result,
  });
});

const softdeleteAdminById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

 
    const result = await adminService.softdeleteAdminById(id as string);
    sendResponse(res, {
      statusCode: status.OK,
      success: "true",
      message: "Admin soft-deleted successfully",
      data: result,
    });
  
});

const deleteAdminById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  
    const admin = await adminService.deleteAdminById(id as string);
    sendResponse(res, {
      statusCode: status.OK,
      success: "true",
      message: "Admin deleted successfully",
      data: admin,
    });
  

});


export const adminController = {
  getAllAdmins,
  getAdminById,
  updateAdminData,
  deleteAdminById,
  softdeleteAdminById,
};
