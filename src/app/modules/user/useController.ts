import { Request, Response } from "express";
import { userService } from "./userService";
import sendResponse from "../../utilis/SendResponse";
import catchAsync from "../../utilis/catchAsync";
import { StatusCodes } from "http-status-codes";


const createUser = catchAsync(async (req: Request, res: Response) => {
    const result = await userService.createUserIntoDB(req.body)
    console.log("working in controller")

    // res.status(201).json(result)
    sendResponse(res, { statusCode: 201, success: true, message: "User created successfully", data: result })

    // res.status((await result).status).json((await result).data)
})

const logInUser = catchAsync(async (req: Request, res: Response) => {
    const result = await
        userService.logInUserFromDB(req.body)

    res.cookie("token", result.acces_token,
        {
            httpOnly: false,
            secure: true,
            sameSite: process.env.NODE_ENV === "production" ? "none" : "strict" 
        })

    sendResponse(res, { statusCode: StatusCodes.ACCEPTED, success: true, message: "User logged in successfully", data: result })



})


export const userController = { createUser, logInUser } 