import multer from "multer"
import { MiddlewareRoute } from "@medusajs/medusa";
import { authenticate, validateAndTransformBody } from "@medusajs/framework";
import { CreateBannerSchema } from "./validators";

const upload = multer({ storage: multer.memoryStorage() })

const bannersMiddleware: MiddlewareRoute[] = [
    {
        matcher: "/admin/banners/upload**",
        method: "POST",
        middlewares: [
            authenticate(["user"], "bearer"),
            upload.array("files"),
        ],
    },
    {
        matcher: "/admin/banners",
        method: "GET",
        middlewares: [
            authenticate(["user"], "bearer"),
        ],
    },
    {
        matcher: "/admin/banners/:id",
        method: "GET",
        middlewares: [
            authenticate(["user"], "bearer"),
        ],
    },
    {
        matcher: "/admin/banners/:id",
        method: "DELETE",
        middlewares: [
            authenticate(["user"], "bearer"),
        ],
    },
    {
        matcher: "/admin/banners",
        method: "POST",
        middlewares: [
            validateAndTransformBody(CreateBannerSchema),
            authenticate(["user"], "bearer"),
        ],
    }
]

export default bannersMiddleware