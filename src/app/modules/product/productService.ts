import { PrismaClient, Product } from "@prisma/client";
import { InputJsonValue } from "@prisma/client/runtime/library";
import ApiError from "../../utilis/ApiErr";
import {StatusCodes} from 'http-status-codes'

const prisma = new PrismaClient()
const createProduct = async (payload: Product) => {
    try {


        const result = await prisma.product.create({
            data: {
                productName: payload.productName,
                brand: payload.brand,
                category: payload.category,
                description: payload.description,
                image: payload.image as InputJsonValue,
                price: payload.price,
                ratting: payload.ratting,
            }
        })

        return result

    } catch (error) {
        throw new ApiError(StatusCodes.BAD_REQUEST, error as string)
    }
}