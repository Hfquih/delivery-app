import CustomAPIERROR from "../errors/CustomError.js";
import { StatusCodes } from "http-status-codes";
import { Request, Response, NextFunction } from "express"

export const errorHandler=(err:CustomAPIERROR,req:Request,res:Response,next:NextFunction)=>{
  console.log(err)
 if(err instanceof CustomAPIERROR){
  return res.status(err.statusCode).json({msg:err.message})
 }
 return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({msg:{err}})
}