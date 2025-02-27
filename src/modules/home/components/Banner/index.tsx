import React from "react";
import { BannerSlider } from "./Slider";
import { ListImg } from "./ListImg";
import { LisMenuProduct } from "./ListMenuProduct";
import { dataImgBottom, dataImgRight } from "@/mocks";

export const BannerHome = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-3">
          <LisMenuProduct />
        </div>
        <div className="col-span-9">
          <BannerSlider />
        </div>
        {/* <div className="col-span-3">
          <ListImg data={dataImgRight} />
        </div> */}
        <div className="col-span-12">
          <ListImg data={dataImgBottom} viewColumn />
        </div>
      </div>
    </div>
  );
};
