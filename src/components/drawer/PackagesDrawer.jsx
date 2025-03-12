import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Scrollbars from "react-custom-scrollbars-2";
import LabelArea from "../form/selectOption/LabelArea";
import InputArea from "../form/input/InputArea";
import Select from "../form/selectOption/Select";
import DrawerButton from "../form/button/DrawerButton";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const PackagesDrawer = ({ onSubmit }) => {
  const { handleSubmit, register, setValue, watch, formState: { isSubmitting } } = useForm();
  const [description, setDescription] = useState("");

  return (
    <>
      <div>
        <h1 className="text-4xl text-center mt-4">Add Package</h1>
      </div>

      <Scrollbars className="w-full md:w-12/12 lg:w-8/12 xl:w-8/12 relative dark:bg-gray-700 dark:text-gray-200">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="px-6 pt-8 flex-grow scrollbar-hide w-full max-h-full">
            {/* Package Name */}
            <div className="grid grid-cols-6 gap-3 mb-6">
              <LabelArea label="Package Name" />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  required={true}
                  register={register}
                  name="name"
                  type="text"
                  placeholder="Enter Package Name"
                />
              </div>
            </div>

            {/* Package Days */}
            <div className="grid grid-cols-6 gap-3 mb-6">
              <LabelArea label="Package Days" />
              <div className="col-span-8 sm:col-span-4">
                <InputArea
                  required={true}
                  register={register}
                  name="packageDays"
                  type="number"
                  placeholder="Enter Package Days"
                />
              </div>
            </div>

            {/* Package Description with CKEditor */}
            <div className="grid grid-cols-6 gap-3 mb-6">
              <LabelArea label="Package Description" />
              <div className="col-span-8 sm:col-span-4">
                <CKEditor
                  editor={ClassicEditor}
                  data={description}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    setDescription(data);
                    setValue("packageDescription", data);
                  }}
                />
                <input type="hidden" {...register("packageDescription")} value={description} />
              </div>
            </div>

            {/* Package Status */}
            <div className="grid grid-cols-6 gap-3 mb-6">
              <LabelArea label="Status" />
              <div className="col-span-8 sm:col-span-4">
                <Select name="status" {...register("status", { required: "Status is required!" })}>
                  <option value="" defaultValue hidden>
                    Select Status
                  </option>
                  <option value="1">Active</option>
                  <option value="2">Inactive</option>
                </Select>
              </div>
            </div>

            {/* Submit Button */}
            <DrawerButton title="Add Package" isSubmitting={isSubmitting} />
          </div>
        </form>
      </Scrollbars>
    </>
  );
};

export default PackagesDrawer;
