import express from "express";

import { login, logout, signUpUser } from "../Controller/user.controllers.js";


const userRouter = express.Router();

userRouter.post('/signUp', signUpUser)
userRouter.post('/signin',login)
userRouter.get('/logout',logout)


export default userRouter;