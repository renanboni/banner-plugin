import { createWorkflow, WorkflowResponse } from "@medusajs/framework/workflows-sdk";
import { createBannerStep } from "./steps/create-banner";

export type CreateBannerWorkflowInput = {
    title: string,
    link: string,
    image: string,
    image_mobile?: string,
    sort_order?: number,
    enabled?: boolean
}

export const createBannerWorkflow = createWorkflow(
    "create-banner",
    (input: CreateBannerWorkflowInput) => {
        const banner = createBannerStep(input)

        return new WorkflowResponse(banner)
    }
)