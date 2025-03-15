import React, { useState } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import LabelArea from "../form/selectOption/LabelArea";
import InputArea from "../form/input/InputArea";
import { useForm } from "react-hook-form";
import DrawerButton from "../form/button/DrawerButton";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { notifyError, notifySuccess } from "@/utils/toast";

const BannerDrawer = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();
  const axiosPublic = useAxiosPublic();

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [message, setMessage] = useState("");

  // ✅ Correct File Change Handler
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  // ✅ Upload Image Function
  const uploadImage = async () => {
    if (!file) {
      setMessage("Please select an image.");
      return null;
    }

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await axiosPublic.post(`/images/upload`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return res.data.imageUrl;
    } catch (error) {
      console.error("Image upload failed:", error);
      setMessage("Image upload failed.");
      return null;
    }
  };

  // ✅ Submit Form
  const onSubmit = async (data) => {
    const uploadedImageUrl = await uploadImage();
    if (!uploadedImageUrl) return;

    const bannerData = {
      title: data.title,
      description: data.description,
      image: uploadedImageUrl,
      image_thumb: uploadedImageUrl,
      status: data.status,
    };

    try {
      const res = await axiosPublic.post("/banners/add", bannerData);
      if(res.status === 201){
        notifySuccess("Banner created successfully.");
        reset();
        setPreview(null);
        setFile(null);
      }
    } catch (error) {
      console.error("Banner creation failed:", error);
      setMessage("Banner creation failed.");
      notifyError("Banner creation failed.");
    }
  };

  return (
    <>
      <div>
        <h1 className="text-4xl text-center mt-4">Add Banner</h1>
      </div>

      <Scrollbars>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="px-6 pt-8 flex-grow scrollbar-hide w-full max-h-full">
            {/* Title */}
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Banner Title" />
              <div className="col-span-6 sm:col-span-4">
                <InputArea
                  required={true}
                  register={register}
                  name="title"
                  type="text"
                  placeholder="Please Enter Title"
                />
              </div>
            </div>

            {/* Description */}
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 relative">
              <LabelArea label="Description" />
              <div className="col-span-6 sm:col-span-4">
                <InputArea
                  required={true}
                  register={register}
                  name="description"
                  type="text"
                  placeholder="Enter Description"
                />
              </div>
            </div>

            {/* ✅ Fixed Image Upload */}
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 relative">
              <LabelArea label="Images" />
              <div className="col-span-6 sm:col-span-4">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="border border-gray-300 rounded-lg p-2 block w-full cursor-pointer"
                />
              </div>
              {preview && (
                <img src={preview} alt="Preview" className="mt-2 w-32 h-32 object-cover rounded-lg" />
              )}
            </div>

            {/* Status */}
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 relative">
              <LabelArea label="Status" />
              <div className="col-span-6 sm:col-span-4">
                <select
                  {...register("status", { required: true })}
                  className="border border-gray-300 rounded-lg p-2 block w-full bg-white"
                >
                  <option value="1">Active</option>
                  <option value="0">Inactive</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <DrawerButton isSubmitting={isSubmitting} />
          </div>
        </form>
      </Scrollbars>
    </>
  );
};

export default BannerDrawer;
