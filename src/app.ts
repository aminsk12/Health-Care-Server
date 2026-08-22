import express, { type Application } from "express";
import cors from "cors";
import { userRouter } from "./modules/user/user.route";

const app: Application = express();
app.use(cors());
app.use(express.json());



app.use("/api/v1/users", userRouter);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

export default app;
