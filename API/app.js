import "./config/env.js";

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
import fileUpload from 'express-fileupload';

import { config, isAllowedOrigin } from "./config/env.js";
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
const corsMethods = ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"];
const corsAllowedHeaders = [
  "Origin",
  "X-Requested-With",
  "Content-Type",
  "Accept",
  "Authorization",
];
const shouldAllowOrigin = (origin) =>
  !origin || config.allowedOrigins.length === 0 || isAllowedOrigin(origin);
const corsOptions = {
  origin(origin, callback) {
    if (shouldAllowOrigin(origin)) {
      callback(null, true);
      return;
    }

    callback(new Error(`CORS origin not allowed: ${origin}`));
  },
  methods: corsMethods,
  allowedHeaders: corsAllowedHeaders,
  optionsSuccessStatus: 204,
};
const mountApiRoutes = (basePath = "") => {
  app.use(`${basePath}/ai`, aiChatRoute);
  app.use(`${basePath}/user`, userRouter);
  app.use(`${basePath}/category`, categoryRouter);
  app.use(`${basePath}/subcategory`, subcategoryRouter);
  app.use(`${basePath}/addproducts`, addproductRouter);
  app.use(`${basePath}/transaction`, transactionRouter);
  app.post(`${basePath}/payment`, Gateway);
  app.post(`${basePath}/resetpassword`, ResetPasswordMail);
};

//to handle cross origin request
app.use((req, res, next) => {
  const origin = req.headers.origin;

  if (origin && shouldAllowOrigin(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
    res.header("Vary", "Origin");
    res.header("Access-Control-Allow-Methods", corsMethods.join(","));
    res.header("Access-Control-Allow-Headers", corsAllowedHeaders.join(","));
  }

  if (req.method === "OPTIONS" && origin && shouldAllowOrigin(origin)) {
    res.sendStatus(204);
    return;
  }

  next();
});

app.use(cors(corsOptions));



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

mountApiRoutes("/api");
mountApiRoutes("");

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
