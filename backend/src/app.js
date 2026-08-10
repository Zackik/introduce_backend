import express from "express";

const app = express();//create an express application

app.use(express.json());

//router import
import userRouter from './routes/user.route.js';

// router declaration
app.use("/api/v1/users", userRouter);

// example router: http://localhost:4000/api/v1/users/register

export default app;