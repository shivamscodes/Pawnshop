import "./config/env.js";

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
import fileUpload from 'express-fileupload';

import { config } from "./config/env.js";
import connectToDatabase from "./models/connection.js";

import userRouter from './routers/user.router.js'
import categoryRouter from './routers/category.router.js'
import subcategoryRouter from './routers/subcategory.router.js'
import ResetPasswordMail from './controller/ResetPasswordMail.contoller.js';
import addproductRouter from  './routers/addproduct.router.js'
import aiChatRoute from "./routers/aiChat.js";
import transactionRouter from "./routers/transaction.router.js"

//to link controller
import Gateway from './controller/payment.controller.js';

const app = express();

//to handle cross origin request
app.use(
  cors({
    origin(origin, callback) {
      if (!origin || config.allowedOrigins.length === 0) {
        callback(null, true);
        return;
      }

      if (config.allowedOrigins.includes(origin)) {
        callback(null, true);
        return;
      }

      callback(new Error("CORS origin not allowed"));
    },
  })
);



//configuration to fetch req body content : body parser middleware
//used to fetch req data from methods like : POST , PUT , PATCH , DELETE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//configuration to fetch file content : file upload middleware
app.use(fileUpload());

app.use(async (req, res, next) => {
  try {
    await connectToDatabase();
    next();
  } catch (error) {
    next(error);
  }
});

app.get("/api/health", (req, res) => {
  res.status(200).json({ status: true });
});

app.use("/api/ai", aiChatRoute);

app.use("/api/user",userRouter);
app.use("/api/category",categoryRouter)
app.use("/api/subcategory",subcategoryRouter);
app.use("/api/addproducts",addproductRouter);
app.use("/api/transaction", transactionRouter);

//method to load Gateway
app.post("/api/payment",Gateway);

//route for forgetpassword
app.post("/api/resetpassword",ResetPasswordMail);

app.use((error, req, res, next) => {
  console.error(error);

  res.status(error.statusCode || 500).json({
    status: false,
    message: error.message || "Internal Server Error",
  });
});

if (!config.isVercel) {
  app.listen(config.port, () => {
    console.log(`API running at http://localhost:${config.port}`);
  });
}

export default app;
