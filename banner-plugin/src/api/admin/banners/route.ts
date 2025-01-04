import { MedusaRequest, MedusaResponse } from "@medusajs/framework"
import { createBannerWorkflow } from "src/workflows/banner/create-banner"
import { CreateBannerType } from "./validators"
import BannerModuleService from "src/modules/banner/service"
import { BANNER_MODULE } from "src/modules/banner"

export const GET = async (
    req: MedusaRequest,
    res: MedusaResponse
) => {
    const bannerModuleService: BannerModuleService = req.scope.resolve(
        BANNER_MODULE
    )

    const limit = req.query.limit || 15
    const offset = req.query.offset || 0

    const [banners, count] = await bannerModuleService.listAndCountBanners({}, {
        skip: offset as number,
        take: limit as number,
    })

    res.json({
        banners,
        count,
        limit,
        offset,
    })
}

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

    res.json({ banner: result })
}

