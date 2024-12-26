import { defineRouteConfig } from "@medusajs/admin-sdk";
import {StackPerspective} from "@medusajs/icons";

const BannersPage = () => {
    return (
        <div></div>
    );
}

export default BannersPage;

export const config = defineRouteConfig({
    label: "Banners",
    icon: StackPerspective,
})