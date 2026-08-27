import type { Response } from "express";

const sendResponse = <T>(
  res: Response,
  jsonData: {
    statusCode: number;
    success: string;
    message: string;
    meta?: {
      page: number;
      limit: number;
      total: number;
    };
    data: T | undefined | null;
  },
) => {
  res.status(jsonData.statusCode).json({
    success: jsonData.success,
    message: jsonData.message,
    meta: jsonData.meta || undefined || null,
    data: jsonData.data || undefined || null,
  });
};

export default sendResponse;
