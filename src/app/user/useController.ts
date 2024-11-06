import { Request, Response } from "express";
import { userService } from "./userService";


const createUser = async (req: Request, res: Response) => {
    const result = userService.createUserIntoDB(req.body)

    res.status((await result).status).json((await result).data)

}

const logInUser = async (req: Request, res: Response) => {
    const result = userService.logInUserFromDB(req.body)

     res.status((await result).status).json((await result).data)


}


export const userController = { createUser, logInUser } 