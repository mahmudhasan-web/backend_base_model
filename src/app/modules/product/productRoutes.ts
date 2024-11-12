import { Router } from "express";
import { productController } from "./productController";
import VerifyToken from "../../middleware/verifyToken";

const route = Router()

route.post('/create', VerifyToken,
    productController.createProduct
)

export const productRoute = route