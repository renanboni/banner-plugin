import { AuthenticatedMedusaRequest, MedusaResponse } from "@medusajs/framework";
import { BANNER_MODULE } from "src/modules/banner";
import BannerModuleService from "src/modules/banner/service";

export const GET = async (
    req: AuthenticatedMedusaRequest,
    res: MedusaResponse
) => {
    const bannerModuleService: BannerModuleService = req.scope.resolve(
        BANNER_MODULE
    )

    const banner = await bannerModuleService.retrieveBanner(req.params.id)

    res.status(200).json({
        banner,
    })
}

export const DELETE = async (
    req: AuthenticatedMedusaRequest,
    res: MedusaResponse
) => {
    const bannerModuleService: BannerModuleService = req.scope.resolve(
        BANNER_MODULE
    )

    await bannerModuleService.deleteBanners(req.params.id)

    res.status(204).send()
}
