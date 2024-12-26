import { model } from "@medusajs/framework/utils";

export const Banner = model.define("banner", {
    id: model.id().primaryKey(),
    title: model.text().default("").unique(),
    link: model.text(),
    image: model.text(),
    image_mobile: model.text().nullable(),
    sort_order: model.number().default(0),
    enabled: model.boolean().default(true),
})