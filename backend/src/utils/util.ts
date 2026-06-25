import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import NotFound from '../errors/NotFound.js'
import { User } from '../generated/prisma/client.js'


const privateKey = process.env.JWT_PRIVATE_KEY

if(!privateKey){
    throw new NotFound("private key not found")
}

const PRV_KEY= privateKey.replace(/\\n/g, '\n');


export function createJWT(users:User){
    return jwt.sign({userId:users.id , firstname:users.firstName , lastname:users.lastName , role:users.role} , PRV_KEY , {algorithm:'RS256' , expiresIn:'1d'})
}

export async function hashPass(password:string){
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password , salt)
    return hash
}

export async function comparePasse(userPass:string , hashPassword:string){
    const isMatch= await bcrypt.compare(userPass , hashPassword)
    return isMatch
}