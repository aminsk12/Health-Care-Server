import express, { type Application } from "express";
import cors from "cors";
import { userRouter } from "./app/modules/user/user.route";
import { adminRoute } from "./app/modules/Admin/admin.route";


const app: Application = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRoute);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

export default app;
