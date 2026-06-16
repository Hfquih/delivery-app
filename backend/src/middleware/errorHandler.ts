import CustomAPIERROR from "../errors/CustomError";
import { StatusCodes } from "http-status-codes";
import { Request, Response, NextFunction } from "express"

export const errorHandler=(err:CustomAPIERROR,req:Request,res:Response,next:NextFunction)=>{
  
 let customError = {
      //set default
     statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
     msg: err.message || 'Something went wrong try again later',
   }
 
   return res.status(customError.statusCode).json({ msg: customError.msg })
   //return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:{...err}})
}