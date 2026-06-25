import {Strategy as jwtStrategy , StrategyOptions , VerifiedCallback} from 'passport-jwt'
import { ExtractJwt } from 'passport-jwt'
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


const publicKey =  process.env.JWT_PUBLIC_KEY

if(!publicKey){
    throw new NotFound('public key not found')
}

const PUB_KEY= publicKey.replace(/\\n/g, '\n');

if(!process.env.JWT_PUBLIC_KEY){
    throw new NotFound(
        'environment variables are missing'
    );
}

const options : StrategyOptions={
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey : PUB_KEY,
    algorithms : ['RS256']
}

interface JWTpayload {
    userId:number,
    firstname:string,
    lastname:string,
    role:string
}

export default (passport: typeof import("passport"))=>{
    passport.use(new jwtStrategy(options , async (payload:JWTpayload , done:VerifiedCallback)=>{
        try{
            const users = await prisma.user.findUnique({where :{id:payload.userId}})

            if(users){
                return done(null , users)
            }
            else{
                return done(null , false)
            }
        }catch(error){
            return done(error)
        }
    }))
}