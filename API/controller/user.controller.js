import jwt from 'jsonwebtoken';
import Mail from "./Mail.controller.js";
import { config, requireConfig } from "../config/env.js";


import userSchemaModel from "../models/user.model.js";

const normalizeEmail = (email = "") => email.trim().toLowerCase();

export const save =async(req,res)=>{
   try{
    const lastUser = await userSchemaModel.findOne().sort({ _id: -1 });
    const nextId = lastUser ? lastUser._id + 1 : 1;

    const userDetails = {
      ...req.body,
      email: normalizeEmail(req.body.email),
      _id: nextId,
      role: "user",
      status: 1,
      __v: 1,
      info: new Date().toString(),
    };

    await userSchemaModel.create(userDetails);

    Mail(userDetails.email).catch((error) => {
      console.error("Verification email error:", error);
    });

    res.status(201).json({
      status: true,
      message: "Registration successful",
    });
}
catch(error){
   const message =
     error?.errors?.email?.message ||
     error?.message ||
     "Registration failed";

   const statusCode =
     error?.name === "ValidationError" || error?.code === 11000 ? 400 : 500;

   res.status(statusCode).json({
    status: false,
    message,
   });
}



    // res.send("user regestration successful");
    // console.log(req.body);
};




//login

export const login=async(req,res)=>{
   try {
      const user = await userSchemaModel.findOne({
        email: normalizeEmail(req.body.email),
        password: req.body.password,
      });

   if(user){
      if (user.status === 0 && user.__v === 1) {
        return res.status(403).json({
          status: false,
          message: "Your account is inactive. Please contact the admin.",
        });
      }

      const token  = jwt.sign(
        {
          email: user.email,
          role: user.role,
        },
        requireConfig(
          config.jwtSecret,
          "JWT_SECRET is missing. Add it to API/.env or Vercel environment variables."
        ),
        { expiresIn: "7d" }
      );

      res.status(200).json({"status":true ,"token":token, "info": user});
   }else{
      res.status(401).json({
        status: false,
        message: "Invalid email or password",
      });
   }
  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message || "Login failed",
    });
  }

};



//fetchAPI

export const fetch = async(req,res)=>{
   var condition_obj = req.query;
   // let condition_obj = req.query.condition_obj;
   // if(condition_obj!=undefined){
   //    condition_obj = JSON.parse(condition_obj);
   // }
   // else{
   //    condition_obj={};
   // }


   // if(condition_obj.reset){
   //    delete condition_obj.reset;
   // }

   let userList = await userSchemaModel.find(condition_obj);
   if(userList.length!=0){

      // if(req.query.reset === "true"){
      //    const email = userList[0].email;
      //    // const link = `/resetpassword/${email}`;
        
      //    ResetPasswordMail(email);
      // }

      res.status(200).json({"status": true, "info": userList});
   }else{
      res.status(404).json({
        status:false,
        info: [],
        message: "No users found",
      });
   }

};



//delete

export const deleteUser = async(req,res)=>{
     try{
       let userDetails = await userSchemaModel.findOne(req.body);

      if(userDetails){
         let user =await userSchemaModel.deleteOne(req.body);
        if(user){
         res.status(200).json({"status": true});
        }
        else{
         res.status(500).json({"status": false});
        }
      }else{
         res.status(404).json({"status":"not found"});
      }
   }
   catch(error){
       res.status(500).json({"status": false});
   }
};




//update

export const update =async(req,res)=>{
// console.log(req.body);
     try{
   let userDetails =await userSchemaModel.findOne(req.body.condition_obj);
    
   if(userDetails){
      let user = await userSchemaModel.updateOne(req.body.condition_obj,{$set:req.body.content_obj})
      
      if(user){
         res.status(200).json({"status":true});
      }else{
         res.status(500).json({"status": false});
      }
   }
   else{
      res.status(404).json({"status":"not found"});
   }

}
   catch(error){
       res.status(500).json({"status": false});
   }

};
