import { Router } from "express";
import { userController } from "./useController";

const route = Router()

route.post('/create',
  
    userController.createUser
)

route.post('/loginuser',
    userController.logInUser
)


export const userRoutes = route