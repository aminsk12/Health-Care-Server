import  { Router } from "express";
import { adminController } from "./admin.controller";

const router = Router();

router.get("/", adminController.getAllAdmins);

router.get("/:id", adminController.getAdminById);

router.patch("/:id", adminController.updateAdminData);


router.delete("/:id", adminController.deleteAdminById);


router.delete("/soft-delete/:id", adminController.softdeleteAdminById);


export const adminRoute = router;