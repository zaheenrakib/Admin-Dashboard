import AnimatedContent from "@/components/common/AnimatedContent";
import BannerDrawer from "@/components/drawer/BannerDrawer";
import MainDrawer from "@/components/drawer/MainDrawer";
import PageTitle from "@/components/Typography/PageTitle";
import { SidebarContext } from "@/context/SidebarContext";
import { Button } from "@windmill/react-ui";
import React, { useContext } from "react";
import { FiPlus } from "react-icons/fi";

const Banners = () => {
  const { toggleDrawer, lang } = useContext(SidebarContext);
  return (
    <>
      <PageTitle>{"Banner List"}</PageTitle>
      <MainDrawer>
        <BannerDrawer />
      </MainDrawer>

      <AnimatedContent>
        <div className="w-full md:w-48 lg:w-48 xl:w-48">
          <Button onClick={toggleDrawer} className="w-full rounded-md h-12 ">
            <span className="mr-2">
              <FiPlus />
            </span>
            {"Add Banner"}
          </Button>
        </div>
      </AnimatedContent>
    </>
  );
};

export default Banners;
