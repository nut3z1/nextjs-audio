"use client";

import { ProductsType } from "@/types/product";
import Image from "next/image";
import logo from "../../../../public/logo.jpg";
import parse from "html-react-parser";
import { removeAllClassesUsingRegex } from "@/lib/function";
import Rater from "react-rater";
import { PresentDetail } from "./presentDetail";

export const ProductDetail = ({ data }: { data?: ProductsType }) => {
  return (
    <div className="container">
      <div className="grid grid-cols-2 gap-10">
        <div>
          <Image
            src={data?.images?.[0].src ?? logo.src}
            alt={data?.name ?? "Hoang long am thanh so"}
            width={580}
            height={580}
            priority
            className="rounded-t-lg"
          />
        </div>
        <div>
          <div className="text-2xl font-bold ">{data?.name}</div>
          <div className="py-3 flex items-center gap-3">
            Thương hiệu: Weeworld <Rater total={5} rating={5} />
          </div>
          <p>{data?.price ? `Giá bán: ${data.price}` : ""}</p>
          <PresentDetail data={data} />
        </div>
      </div>
      <div>{parse(removeAllClassesUsingRegex(data?.description ?? ""))}</div>
    </div>
  );
};
