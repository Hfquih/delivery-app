class CustomAPIERROR extends Error{
    public statusCode : number
    public errors?: any;
    public code?: number;
    public keyPattern?: any;
    constructor(message : string , statusCode : number){
        super(message)
        this.statusCode=statusCode
    }
}

export default CustomAPIERROR