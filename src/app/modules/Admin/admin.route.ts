import  { Router } from "express";
import { adminController } from "./admin.controller";

const router = Router();

router.get("/", adminController.getAllAdmins);

router.get("/:id", adminController.getAdminById);

router.delete("/:id", adminController.deleteAdminById);

router.patch("/:id", adminController.updateAdminData);


export const adminRoute = router;