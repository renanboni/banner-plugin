import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk";
import BannerModuleService from "../../../../modules/banner/service";
import { BANNER_MODULE } from "../../../../modules/banner";

export type CreateBannerStepInput = {
    title: string,
    link: string,
    image: string,
    image_mobile?: string,
    sort_order?: number
}

export const createBannerStep = createStep(
    "create-banner-step",
    async (input: CreateBannerStepInput, { container }) => {
        const bannerModuleService: BannerModuleService = container.resolve(BANNER_MODULE)

        const banner = await bannerModuleService.createBanners({
            title: input.title,
            link: input.link,
            image: input.image,
            image_mobile: input.image_mobile,
            sort_order: input.sort_order,
        })

        return new StepResponse(banner, banner.id)
    },
    async (id: string, { container }) => {
        const bannerModuleService: BannerModuleService = container.resolve(BANNER_MODULE)

        await bannerModuleService.deleteBanners([id])
    }
)