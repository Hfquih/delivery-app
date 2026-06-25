import express from "express";
const router = express.Router()
import {getAllUsers , register , login, getUsers , updateUser , deleteUser} from '../controllers/user.js'
import { requireAuth } from "../middleware/auth.js";
import { authorization } from "../middleware/auth.js";


router.post('/register' , register)

router.post('/login' , login)

router.get('/' , requireAuth , authorization('admin') , getAllUsers)

router.get('/:id' , requireAuth , getUsers)

router.patch('/:id' , updateUser)

router.delete('/:id' , deleteUser)

export default router