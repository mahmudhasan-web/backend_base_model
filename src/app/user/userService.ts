import { PrismaClient, User } from "@prisma/client";
import { compareSync, hashSync } from "bcryptjs";
import { Request, Response } from "express";


const prisma = new PrismaClient()

// const createUserIntoDB = async (payload: User, res: Response) => {

//     const result = await prisma.user.findUnique({
//         where: {
//             email: payload.email
//         }
//     })

//     if (result) {
//         return { status: 503, data: { message: "User already exit" } }
//     }

//     const user = await prisma.user.create({
//         data: {
//             ...payload,
//             password: hashSync(payload.password, 10)

//         }
//     })
//     return { status: 201, data: user }
// }


// const logInUserFromDB = async (payload: User) => {
//     const user = await prisma.user.findUnique(
//         {
//             where:
//             {
//                 email: payload.email,
//             }
//         })

//     console.log(user);
//     const data = {
//         email : user?.email,
//         name : user?.name
//     }
//     if (user) {
//         if (compareSync(payload.password, user.password)) {
//             return { status: 200, data: data }
//         }
//         return { status: 400, data: { message: "password incorrect" } }
//     }
//     return { status: 400, data: { message: "Invalid user" } }


// }


const createUserIntoDB = async (payload: User) => {
    const { email, password, name } = payload
    const user = await prisma.user.findUnique({
        where: {
            email
        }
    })

    if (user) {
        return { status: 403, data: { message: "User already exist" } }
    }
    const result = await prisma.user.create({
        data: {
            email,
            password: hashSync(password, 10),
            name
        }
    })

    return { status: 201, data: result }

}

const logInUserFromDB = async (payload: User) => {

    const user = await prisma.user.findUnique({
        where: {
            email: payload.email
        }
    })
    if (user && compareSync(payload.password, user.password)) {
        return { status: 200, data: { email: user.email, name: user.name } }
    }
    else {
        return { status: 400, data: { message: "Invalid user or password" } }
    }
}


export const userService = { createUserIntoDB, logInUserFromDB }