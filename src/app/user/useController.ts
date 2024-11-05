import { Request, Response } from "express";
import { userService } from "./userService";


const createUser = async (req: Request, res: Response) => {
    const result =  userService.createUserIntoDB(req.body)

}


export const userController = { createUser } 