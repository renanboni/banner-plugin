import { z } from "zod"

export const CreateBannerSchema = z.object({
    title: z.string().min(1),
    link: z.string().min(1),
    image: z.string().min(1),
    image_mobile: z.string().optional(),
    sort_order: z.number(),
    enabled: z.boolean(),
})

export type CreateBannerType = z.infer<typeof CreateBannerSchema>
