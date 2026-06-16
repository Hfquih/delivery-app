import passport from "passport";
import configurePassport from "../passport/passport";
configurePassport(passport);
import Unauthorized from "../errors/Unauthorized";
import { NextFunction } from "express";

export const requireAuth = passport.authenticate('jwt', { session:false })

export const authorization=(...allowed:string[])=>{
    return(req:Request,res:Response,next:NextFunction)=>{
        if(!allowed.includes(req.user.role)){
            throw new Unauthorized('sorry , you dont have access to this route')
        }
    
        next()
    }
}