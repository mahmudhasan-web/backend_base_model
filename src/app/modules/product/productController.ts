import { Request, Response } from "express";
import catchAsync from "../../utilis/catchAsync";
import sendResponse from "../../utilis/SendResponse";
import { StatusCodes } from 'http-status-codes'
import { productService } from "./productService";

const createProduct = catchAsync(async (req: Request, res: Response) => {

    const result = await productService.createProductToDB(req.body)

    sendResponse(res, { statusCode: StatusCodes.CREATED, message: "Product create successfully", success: true, data: result })

})


export const productController = {createProduct}