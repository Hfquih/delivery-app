import express from "express";
const router = express.Router()
import {getAllUsers , createUsers , getUsers , updateUser , deleteUser} from '../controllers/user'


router.get('/' , getAllUsers)

router.post('/' , createUsers)

router.get('/:id' , getUsers)

router.patch('/:id' , updateUser)

router.delete('/:id' , deleteUser)

export default router