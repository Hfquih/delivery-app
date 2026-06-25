import passport from "passport";
import configurePassport from "../passport/passport.js";
configurePassport(passport);
import Unauthorized from "../errors/Unauthorized.js";
import { NextFunction, Request, Response } from "express";
import { User } from '../generated/prisma/client.js'

export const requireAuth = passport.authenticate('jwt', { session:false })

export const authorization=(...allowed:string[])=>{
    return(req:Request,res:Response,next:NextFunction)=>{
        const user = (req as Request & { user: User }).user
        if (!user) {
            throw new Unauthorized('Authentication required')
        }
        if(!allowed.includes(user.role)){
            throw new Unauthorized('sorry , you dont have access to this route')
        }
    
        next()
    }
}