import multer from "multer"
import { MiddlewareRoute } from "@medusajs/medusa";
import { authenticate } from "@medusajs/framework";

const upload = multer({ storage: multer.memoryStorage() })

const bannersMiddleware: MiddlewareRoute[] = [
    {
        matcher: "/admin/banners/upload**",
        method: "POST",
        middlewares: [
            authenticate(["admin"], "bearer"),
            upload.array("files"),
        ],
    },
]

export default bannersMiddleware