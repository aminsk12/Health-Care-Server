import type { Request, Response } from "express";
import { adminService } from "./admin.service";
import sendResponse from "../../utils/sendResponse";

const getAllAdmins = async (req: Request, res: Response) => {
    console.log("QUERY", req.query);
    
    //console.log("PARAMS", req.params);
  try {
    const result = await adminService.getAllAdmins( req.query);
    sendResponse(res, {
      statusCode: 200,
      success: "true",
      message: "Admins fetched successfully",
      meta: {
   
        total: result.count,
      },
      data: result.admins,
    });
    
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch admins",
      error: (err as Error).message,
    });
  }
};

const getAdminById = async (req: Request, res: Response) => {
  const { id } = req.params;
//   console.log("params", req.body);
  try {
    const admin = await adminService.getAdminById(id as string);
    if (!admin) {
      return res.status(404).json({
        success: false,
        message: "Admin not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Admin fetched successfully",
      data: admin,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch admin",
      error: (err as Error).message,
    });
  }
};


const updateAdminData = async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;

  try {
    const result = await adminService.updateAdminData(id as string, data);
    res.status(200).json({
      success: true,
      message: "Admin data updated successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to update admin data",
      error: (err as Error).message,
    });
  }
};



const softdeleteAdminById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const result = await adminService.softdeleteAdminById(id as string);
    res.status(200).json({
      success: true,
      message: "Admin soft-deleted successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to soft-delete admin",
      error: (err as Error).message,
    });
  }
};

const deleteAdminById = async (req: Request, res: Response) => {
  const { id } = req.params;
  
  try {
    const admin = await adminService.deleteAdminById(id as string);
    res.status(200).json({
      success: true,
      message: "Admin deleted successfully",
      data: admin,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to delete admin",
      error: (err as Error).message,
    });
  }
};

export const adminController = {
  getAllAdmins,
  getAdminById,
  updateAdminData,
  deleteAdminById,
  softdeleteAdminById
};

