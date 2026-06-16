import { Request , Response } from "express"


interface Parmas{
    id:string
}

export const getAllUsers = async(req : Request ,res : Response)=>{}

export const register = async(req : Request ,res : Response)=>{}

export const login = async(req : Request ,res : Response)=>{}

export const getUsers = async(req : Request<Parmas> ,res : Response)=>{}

export const updateUser = async(req : Request ,res : Response)=>{}

export const deleteUser = async(req : Request ,res : Response)=>{}



