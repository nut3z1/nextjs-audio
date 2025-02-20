"use client";

import { ProductsType } from "@/types/product";
import Image from "next/image";
import logo from "../../../../public/logo.jpg";
import parse from "html-react-parser";
import { removeAllClassesUsingRegex } from "@/lib/function";
import Rater from "react-rater";
import { PresentDetail } from "./presentDetail";

export const ProductDetail = ({ data }: { data?: ProductsType }) => {
  console.log("data", data);
  return (
    <div className="container">
      <div className="grid grid-cols-5 gap-10">
        <div className="col-span-3">
          <Image
            src={data?.images?.[0].src ?? logo.src}
            alt={data?.name ?? "Hoang long am thanh so"}
            width={100}
            height={100}
            className="w-full h-full rounded-t-lg"
          />
        </div>
        <div className="col-span-2">
          <div className="text-2xl font-bold ">{data?.name}</div>
          <div className="py-3 flex items-center gap-3">
            Thương hiệu: Weeworld <Rater total={5} rating={5} />
          </div>
          <p>{data?.price ? `Giá bán: ${data.price}` : ""}</p>
          <PresentDetail />
        </div>
      </div>
      <div>{parse(removeAllClassesUsingRegex(data?.description ?? ""))}</div>
    </div>
  );
};
