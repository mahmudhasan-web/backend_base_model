import { PrismaClient, User } from "@prisma/client";
import bcrypt from "bcryptjs"

const prisma = new PrismaClient()


const createUserIntoDB = async (payload: User) => {

    const result = await prisma.user.findUnique({
        where: {
            email: payload.email
        }
    })

    if (result) {
        console.log("User already exit");

    }

        const user = await prisma.user.create({
            data: {
                ...payload,
                password: bcrypt.hashSync(payload.password)
            }
        })

        console.log(user);

}


export const userService = { createUserIntoDB }