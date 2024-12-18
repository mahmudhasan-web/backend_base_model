import { Router } from "express"
import { userRoutes } from "../modules/user/userRoute"
import { productRoute } from "../modules/product/productRoutes"



const router = Router()

const moduleRoutes = [
  {
    path: '/auth',
    route: userRoutes,
  },
  {
    path : "/product",
    route : productRoute
  }
  
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router
/**
 * 
 * mvc
 */