import { Router } from "express";
import { productController } from "./productController";

const route = Router()

route.post('/create-product',  
    productController.createProduct
)

export const productRoute = route