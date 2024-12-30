import { useForm, FormProvider, Controller } from "react-hook-form";
import { Button, FocusModal, Heading, Label, Input, Switch } from "@medusajs/ui";
import { defineRouteConfig } from "@medusajs/admin-sdk";
import { StackPerspective } from "@medusajs/icons";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const bannerSchema = z.object({
  title: z.string().min(1, "Title is required"),
  link: z.string().min(1, "Link is required"),
  image: z.string().min(1, "Image is required"),
  image_mobile: z.string().nullable(),
  sort_order: z.number().default(0),
  enabled: z.boolean().default(true),
});

type BannerFormData = z.infer<typeof bannerSchema>;

const BannersPage = () => {
  const form = useForm<BannerFormData>({
    defaultValues: {
      title: "",
      link: "",
      image: "",
      image_mobile: null,
      sort_order: 0,
      enabled: true,
    },
    resolver: zodResolver(bannerSchema),
  });

  const handleSubmit = async (data: BannerFormData) => {
    try {
      // TODO: Implement banner creation logic
      console.log("Form data:", data);
    } catch (error) {
      console.error("Error creating banner:", error);
    }
  };

  return (
    <FocusModal>
      <FocusModal.Trigger asChild>
        <Button>Create Banner</Button>
      </FocusModal.Trigger>
      <FocusModal.Content>
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="flex h-full flex-col overflow-hidden">
            <FocusModal.Header>
              <div className="flex items-center justify-end gap-x-2">
                <FocusModal.Close asChild>
                  <Button size="small" variant="secondary">
                    Cancel
                  </Button>
                </FocusModal.Close>
                <Button type="submit" size="small">
                  Save
                </Button>
              </div>
            </FocusModal.Header>
            <FocusModal.Body>
              <div className="flex flex-1 flex-col items-center overflow-y-auto">
                <div className="mx-auto flex w-full max-w-[720px] flex-col gap-y-8 px-2 py-16">
                  <div>
                    <Heading className="capitalize">Create Banner</Heading>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Controller
                      control={form.control}
                      name="title"
                      render={({ field }) => (
                        <div className="flex flex-col space-y-2">
                          <div className="flex items-center gap-x-1">
                            <Label size="small" weight="plus">
                              Title
                            </Label>
                          </div>
                          <Input {...field} placeholder="Enter banner title" />
                        </div>
                      )}
                    />

                    <Controller
                      control={form.control}
                      name="link"
                      render={({ field }) => (
                        <div className="flex flex-col space-y-2">
                          <div className="flex items-center gap-x-1">
                            <Label size="small" weight="plus">
                              Link
                            </Label>
                          </div>
                          <Input {...field} placeholder="Enter banner link" />
                        </div>
                      )}
                    />

                    <Controller
                      control={form.control}
                      name="image"
                      render={({ field }) => (
                        <div className="flex flex-col space-y-2">
                          <div className="flex items-center gap-x-1">
                            <Label size="small" weight="plus">
                              Image
                            </Label>
                          </div>
                          <Input {...field} placeholder="Enter image URL" />
                        </div>
                      )}
                    />

                    <Controller
                      control={form.control}
                      name="image_mobile"
                      render={({ field: { value, onChange, ...field } }) => (
                        <div className="flex flex-col space-y-2">
                          <div className="flex items-center gap-x-1">
                            <Label size="small" weight="plus">
                              Mobile Image (Optional)
                            </Label>
                          </div>
                          <Input {...field} value={value || ""} onChange={(e) => onChange(e.target.value || null)} placeholder="Enter mobile image URL" />
                        </div>
                      )}
                    />

                    <Controller
                      control={form.control}
                      name="sort_order"
                      render={({ field: { value, onChange, ...field } }) => (
                        <div className="flex flex-col space-y-2">
                          <div className="flex items-center gap-x-1">
                            <Label size="small" weight="plus">
                              Sort Order
                            </Label>
                          </div>
                          <Input {...field} type="number" value={value} onChange={(e) => onChange(Number(e.target.value))} placeholder="Enter sort order" />
                        </div>
                      )}
                    />

                    <Controller
                      control={form.control}
                      name="enabled"
                      render={({ field: { value, onChange } }) => (
                        <div className="flex flex-col space-y-2">
                          <div className="flex items-center gap-x-1">
                            <Label size="small" weight="plus">
                              Enabled
                            </Label>
                          </div>
                          <Switch checked={value} onCheckedChange={onChange} />
                        </div>
                      )}
                    />
                  </div>
                </div>
              </div>
            </FocusModal.Body>
          </form>
        </FormProvider>
      </FocusModal.Content>
    </FocusModal>
  );
};

export default BannersPage;

export const config = defineRouteConfig({
  label: "Banners",
  icon: StackPerspective,
});
