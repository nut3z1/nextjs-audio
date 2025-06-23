"use client";

import { ProductsType } from "@/types/product/product";
import Image from "next/image";
import logo from "../../../../public/logo.jpg";
import parse from "html-react-parser";
import { removeAllClassesUsingRegex } from "@/lib/function";
import Rater from "react-rater";
import { PresentDetail } from "./presentDetail";
import { ProductRevew } from "./productRevew";
import { Specifications } from "./specifications";

export const ProductDetail = ({ data }: { data?: ProductsType }) => {
  console.log("------");
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
          {/* <PresentDetail /> */}
        </div>
      </div>
      <div className="grid grid-cols-12 gap-10 mt-12">
        <div className="col-span-8">
          {parse(removeAllClassesUsingRegex(data?.description ?? ""))}
        </div>
        <div className="col-span-4">
          {data?.attributes?.length ? <Specifications data={data} /> : null}
        </div>
      </div>
      <ProductRevew id={data?.id} />
    </div>
  );
};
