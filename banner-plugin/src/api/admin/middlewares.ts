import { defineMiddlewares } from "@medusajs/medusa"
import bannersMiddleware from "./banners/middlewares"

export default defineMiddlewares({
    routes: [
        ...bannersMiddleware,
    ],
})
