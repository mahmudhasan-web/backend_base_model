import { Router } from "express";
import { userController } from "./useController";

const route = Router()

route.post('/create',
    userController.createUser)



export const userRoutes = route