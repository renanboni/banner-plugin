import { defineMiddlewares } from "@medusajs/medusa"
import bannersMiddleware from "./admin/banners/middlewares"

export default defineMiddlewares({
    routes: [
        ...bannersMiddleware,
    ],
})
