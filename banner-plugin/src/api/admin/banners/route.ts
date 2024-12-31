import { MedusaRequest, MedusaResponse } from "@medusajs/framework"
import { createBannerWorkflow } from "src/workflows/banner/create-banner"
import { CreateBannerType } from "./validators"

export const POST = async (
    req: MedusaRequest<CreateBannerType>,
    res: MedusaResponse
) => {
    const { result } = await createBannerWorkflow(req.scope)
        .run({
            input: {
                title: req.validatedBody.title,
                link: req.validatedBody.link,
                image: req.validatedBody.image,
                image_mobile: req.validatedBody.image_mobile,
                sort_order: req.validatedBody.sort_order,
                enabled: req.validatedBody.enabled,
            },
        })

    res.json({ brand: result })
}
