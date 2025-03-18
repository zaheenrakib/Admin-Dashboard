import { SidebarContext } from "@/context/SidebarContext";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import useGetDatas from "@/hooks/useGetDatas";
import { notifySuccess } from "@/utils/toast";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import DrawerButton from "../form/button/DrawerButton";
import Scrollbars from "react-custom-scrollbars-2";

const PackageMappingDrawer = () => {
  const {
    handleSubmit,
    register,
    setValue,
    formState: { isSubmitting },
  } = useForm();

  const { closeDrawer } = useContext(SidebarContext);
  const axiosPublic = useAxiosPublic();

  const [packageNames, isLoadingDetails] = useGetDatas("/packages", "packages");

  const onSubmit = async (data) => {
    const res = await axiosPublic.post("/package-details/add", data);
    if (res.status === 200 || res.status === 201) {
      notifySuccess("Package Added Successfully");
      closeDrawer();
    }
  };

  return (
    <>
      <div>
        <h1 className="text-4xl text-center mt-4">Add Package</h1>
      </div>

      <Scrollbars className="w-full md:w-12/12 lg:w-8/12 xl:w-8/12 relative dark:bg-gray-700 dark:text-gray-200 overflow-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="px-6 pt-8 flex-grow scrollbar-hide w-full max-h-full">
            {/* Package Name */}
            <div className="grid grid-cols-6 gap-3 mb-6">
              <LabelArea label="Package Name" />
              <div className="col-span-8 sm:col-span-4">
                <select
                  name="packageId"
                  {...register("packageId", { required: "Name is required!" })}
                >
                  <option value="" defaultValue hidden>
                    Select PackagesName
                  </option>
                  {packageNames?.data?.map((data) => (
                    <option key={data.id} value={data.id}>
                      {data.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Package Days */}
            <div className="grid grid-cols-6 gap-3 mb-6">
              <LabelArea label="Package Days" />
              <div className="col-span-8 sm:col-span-4">
                <select
                  name="packageDays"
                  {...register("packageDays", {
                    required: "Package-Days is required!",
                  })}
                >
                  <option value="" defaultValue hidden>
                    Select Packages Days
                  </option>
                  <option value="1">Saturday</option>
                  <option value="2">Sunday</option>
                  <option value="3">Monday</option>
                  <option value="4">Tuesday</option>
                  <option value="5">Wednesday</option>
                  <option value="6">Thursday</option>
                </select>
              </div>
            </div>

            {/* Package Status */}
            <div className="grid grid-cols-6 gap-3 mb-44 mt-32">
              <LabelArea label="Status" />
              <div className="col-span-8 sm:col-span-4">
                <select
                  name="status"
                  {...register("status", { required: "Status is required!" })}
                >
                  <option value="" defaultValue hidden>
                    Select Status
                  </option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <DrawerButton title="Add Package Mapping" isSubmitting={isSubmitting} />
          </div>
        </form>
      </Scrollbars>
    </>
  );
};

export default PackageMappingDrawer;
