"use client";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useActionState, useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import InputFieldError from "../shared/InputFieldError";
import { Campaign } from "@/types/campaign.interface";
import { createCampaign, updateCampaign } from "@/services/campaign/campaignmanagement";

interface ICampaignFormDialogProps {
    open: boolean;
    onClose: () => void;
    onSuccess: () => void;
    campaign?: Campaign;
}

const CampaignFormDialog = ({
    open,
    onClose,
    onSuccess,
    campaign,
}: ICampaignFormDialogProps) => {
    const formRef = useRef<HTMLFormElement>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const isEdit = !!campaign?.id;
    //   const { isEditMode, state, formAction, isPending } = useAdminForm(admin);

    const [state, formAction, isPending] = useActionState(
        isEdit ? updateCampaign.bind(null, campaign?.id as string) : createCampaign,
        null
    );
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        setSelectedFile(file || null);
    };
     const hasHandledSuccess = useRef(false);

    // Handle success/error from server
    useEffect(() => {
        if (state?.success && !hasHandledSuccess.current) {
            hasHandledSuccess.current = true;

            toast.success(state.message || "Campaign created successfully");

            if (formRef.current) {
                formRef.current.reset();
            }

            onClose();

            // let dialog close first, then refresh
            setTimeout(() => {
                onSuccess();
            }, 100);
        }

        if (state?.message && !state.success) {
            toast.error(state.message);

            if (selectedFile && fileInputRef.current) {
                const dataTransfer = new DataTransfer();
                dataTransfer.items.add(selectedFile);
                fileInputRef.current.files = dataTransfer.files;
            }
        }
    }, [state, onSuccess, onClose, selectedFile]);

    const handleClose = () => {
        setSelectedFile(null);
        formRef.current?.reset();
        onClose();
    };

    return (
        <Dialog open={open} onOpenChange={handleClose}>
            <DialogContent className="max-h-[90vh] flex flex-col p-0">
                <DialogHeader className="px-6 pt-6 pb-4">
                    <DialogTitle>{isEdit ? "Edit Campaign" : "Add New Campaign"}</DialogTitle>
                </DialogHeader>

                <form
                    ref={formRef}
                    action={formAction}
                    className="flex flex-col flex-1 min-h-0"
                >
     
                    <div className="flex-1 overflow-y-auto px-6 space-y-4 pb-4">

                        {/* Title */}
                        <Field>
                            <FieldLabel htmlFor="title">Title</FieldLabel>
                            <Input
                            id="title"
                            name="title"
                            placeholder="Amazing Campaign"
                            defaultValue={state?.formData?.title || campaign?.title || ""}
                            />
                            <InputFieldError field="title" state={state} />
                        </Field>

                        {/* Category */}
                        <Field>
                            <FieldLabel htmlFor="category">Category</FieldLabel>
                            <Input
                            id="category"
                            name="category"
                            placeholder="Technology"
                            defaultValue={state?.formData?.category || campaign?.category || ""}
                            />
                            <InputFieldError field="category" state={state} />
                        </Field>

                        {/* Subcategory */}
                        <Field>
                            <FieldLabel htmlFor="subcategory">Subcategory</FieldLabel>
                            <Input
                            id="subcategory"
                            name="subcategory"
                            placeholder="AI, Gadgets, Software"
                            defaultValue={state?.formData?.subcategory || campaign?.subcategory || ""}
                            />
                            <InputFieldError field="subcategory" state={state} />
                        </Field>

                        {/* Thumbnail (file upload → URL on server) */}
                         {/* {!isEdit && (
                            <Field>
                                <FieldLabel htmlFor="file">Campaign Thumbnail</FieldLabel>

                                {selectedFile && (
                                <Image
                                    src={URL.createObjectURL(selectedFile)}
                                    alt="Thumbnail Preview"
                                    width={80}
                                    height={80}
                                    className="rounded"
                                />
                                )}

                                <Input
                                ref={fileInputRef}
                                id="file"
                                name="file"
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                />

                                <p className="text-xs text-gray-500 mt-1">
                                Upload campaign thumbnail
                                </p>
                            </Field>
                            )} */}
                            <Field>
                                <FieldLabel htmlFor="file">Campaign Thumbnail</FieldLabel>

                                {selectedFile && (
                                <Image
                                    src={URL.createObjectURL(selectedFile)}
                                    alt="Thumbnail Preview"
                                    width={80}
                                    height={80}
                                    className="rounded"
                                />
                                )}

                                <Input
                                ref={fileInputRef}
                                id="file"
                                name="file"
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                />

                                <p className="text-xs text-gray-500 mt-1">
                                Upload campaign thumbnail
                                </p>
                            </Field>

                        {/* Video URL */}
                        <Field>
                            <FieldLabel htmlFor="videoUrl">Video URL</FieldLabel>
                            <Input
                            id="videoUrl"
                            name="videoUrl"
                            placeholder="https://youtube.com/watch?v=xxxx"
                            defaultValue={state?.formData?.videoUrl || campaign?.videoUrl || ""}
                            />
                            <InputFieldError field="videoUrl" state={state} />
                        </Field>

                        {/* Views */}
                        <Field>
                            <FieldLabel htmlFor="views">Views</FieldLabel>
                            <Input
                            id="views"
                            name="views"
                            placeholder="89K / 1M"
                            defaultValue={state?.formData?.views || campaign?.views || ""}
                            />
                            <InputFieldError field="views" state={state} />
                        </Field>

                        {/* Date Label */}
                        <Field>
                            <FieldLabel htmlFor="dateLabel">Date Label</FieldLabel>
                            <Input
                            id="dateLabel"
                            name="dateLabel"
                            placeholder="2 weeks ago"
                            defaultValue={state?.formData?.dateLabel || campaign?.dateLabel || ""}
                            />
                            <InputFieldError field="dateLabel" state={state} />
                        </Field>

                        {/* Duration */}
                        <Field>
                            <FieldLabel htmlFor="duration">Duration</FieldLabel>
                            <Input
                            id="duration"
                            name="duration"
                            placeholder="03:45"
                            defaultValue={state?.formData?.duration || campaign?.duration || ""}
                            />
                            <InputFieldError field="duration" state={state} />
                        </Field>

                        {/* Brand */}
                        <Field>
                            <FieldLabel htmlFor="brand">Brand</FieldLabel>
                            <Input
                            id="brand"
                            name="brand"
                            placeholder="Nike"
                            defaultValue={state?.formData?.brand || campaign?.brand || ""}
                            />
                            <InputFieldError field="brand" state={state} />
                        </Field>

                        {/* Featured */}
                        <Field className="flex items-center gap-2">
                            <Input
                            id="featured"
                            name="featured"
                            type="checkbox"
                            defaultChecked={
                                state?.formData?.featured ?? campaign?.featured ?? false
                            }
                            />
                            <FieldLabel htmlFor="featured">Featured Campaign</FieldLabel>
                        </Field>

                        </div>


                    {/* Form Actions */}
                    <div className="flex justify-end gap-2 px-6 py-4 border-t bg-gray-50">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={handleClose}
                            disabled={isPending}
                        >
                            Cancel
                        </Button>
                        <Button type="submit" disabled={isPending}>
                            {isPending
                                ? "Saving..."
                                : isEdit
                                    ? "Update Campaign"
                                    : "Create Campaign"}
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default CampaignFormDialog;