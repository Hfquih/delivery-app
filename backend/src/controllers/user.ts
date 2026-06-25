import { Request , Response } from "express"
import { createJWT } from "../utils/util.js"
import { hashPass } from "../utils/util.js"
import { comparePasse } from "../utils/util.js"
import { StatusCodes } from "http-status-codes"
import BadRequest from "../errors/BadRequest.js"
import NotFound from '../errors/NotFound.js'
import { PrismaClient } from '../generated/prisma/client.js'
import { PrismaPg } from '@prisma/adapter-pg'

const databaseUrl = process.env.DATABASE_URL

if (!databaseUrl) {
  throw new Error('DATABASE_URL is missing')
}

const prisma = new PrismaClient({
  adapter: new PrismaPg({
    connectionString: databaseUrl
  })
})

interface Parmas{
    id:string
}

export const getAllUsers = async(req : Request ,res : Response)=>{
    
}

export const register = async(req : Request ,res : Response)=>{
    const hashedPassword = await hashPass(req.body.password)
    const users = await prisma.user.create({data:{...req.body , password:hashedPassword}})
    const token = createJWT(users)
    res.status(StatusCodes.CREATED).json({msg:'USER CREATED' , token})
}

type login = {
    email:string,
    password:string
}

export const login = async(req : Request<{},{},login,{}> ,res : Response)=>{
    const {email , password} = req.body

    const hashedPassword = await hashPass(req.body.password)

    if(!email || !password){
        throw new NotFound('please provide all info')
    }

    const users = await prisma.user.findUnique({where:{email:email}})

    if(!users){
        throw new BadRequest('INVALID CREDENTIALS')
    }

    if(users.isDeleted){
        throw new BadRequest('account deleted')
    }

    const isMatch = await comparePasse(password , hashedPassword)

    if(!isMatch){
        throw new BadRequest('INVALID CREDENTIALS')
    }

    const token = createJWT(users)

    res.status(StatusCodes.OK).json({msg:`welcome ${users.firstName}`})

}

export const getUsers = async(req : Request<Parmas> ,res : Response)=>{}

export const updateUser = async(req : Request ,res : Response)=>{}

export const deleteUser = async(req : Request ,res : Response)=>{}



