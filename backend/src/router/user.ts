import express from "express";
const router = express.Router()
import {getAllUsers , register , login, getUsers , updateUser , deleteUser} from '../controllers/user'


router.get('/' , getAllUsers)

router.post('/register' , register)

router.post('/login' , login)

router.get('/:id' , getUsers)

router.patch('/:id' , updateUser)

router.delete('/:id' , deleteUser)

export default router