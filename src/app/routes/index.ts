import { Router } from "express";
import { userRouter } from "../modules/user/user.route";
import { adminRouter } from "../modules/Admin/admin.route";


const router = Router();

const moduleRoutes = [
    {
        path: "/user",
        route: userRouter,
    },
    {
        path: "/admin",
        route: adminRouter,
    }
]

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;