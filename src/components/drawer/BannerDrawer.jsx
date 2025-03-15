import React from "react";
import Scrollbars from "react-custom-scrollbars-2";
import LabelArea from "../form/selectOption/LabelArea";
import InputArea from "../form/input/InputArea";
import { useForm } from "react-hook-form";
import DrawerButton from "../form/button/DrawerButton";

const BannerDrawer = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <div>
        <h1 className="text-4xl text-center mt-4">Add Banner</h1>
      </div>

      <Scrollbars>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="px-6 pt-8 flex-grow scrollbar-hide w-full max-h-full">
            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
              <LabelArea label="Banner Name" />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  required={true}
                  register={register}
                  name="title"
                  type="text"
                  placeholder="Please Enter Title"
                />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 relative">
              <LabelArea label="Description" />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  required={true}
                  register={register}
                  name="description"
                  type="text"
                  placeholder="Enter Description"
                />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 relative">
              <LabelArea label="Description" />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  required={true}
                  register={register}
                  name="description"
                  type="file"
                  placeholder="Enter Description"
                />
              </div>
            </div>

            <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 relative">
              <LabelArea label="Description" />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  required={true}
                  register={register}
                  name="description"
                  type="file"
                  placeholder="Enter Description"
                />
              </div>
            </div>

            <DrawerButton isSubmitting={isSubmitting} />
          </div>
        </form>
      </Scrollbars>
    </>
  );
};

export default BannerDrawer;
