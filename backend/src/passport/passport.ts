import {Strategy as jwtStrategy , StrategyOptions , VerifiedCallback} from 'passport-jwt'
import { ExtractJwt } from 'passport-jwt'
import NotFound from '../errors/NotFound'


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
    id:string,
    firstname:string,
    lastname:string
}

export default (passport: typeof import("passport"))=>{
    passport.use(new jwtStrategy(options , async (payload:JWTpayload , done:VerifiedCallback)=>{
        try{
            const users = await user.findOne({_id:payload.userId})

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