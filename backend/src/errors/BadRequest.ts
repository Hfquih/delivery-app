import CustomAPIERROR from "./CustomError.js";
import { StatusCodes } from "http-status-codes";


class BadRequest extends CustomAPIERROR{
    constructor(message:string){
        super(message , StatusCodes.BAD_REQUEST , )
    }
}

export default BadRequest