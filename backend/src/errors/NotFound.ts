import CustomAPIERROR from "./CustomError.js";
import { StatusCodes } from "http-status-codes";


class NotFound extends CustomAPIERROR{
    constructor(message:string){
        super(message , StatusCodes.NOT_FOUND)
    }
}

export default NotFound