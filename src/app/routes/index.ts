import { Router } from "express"
import { userRoutes } from "../user/userRoute"


const router = Router()

const moduleRoutes = [
  {
    path: '/auth',
    route: userRoutes,
  },
  
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router
