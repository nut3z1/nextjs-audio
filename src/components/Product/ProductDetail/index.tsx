"use client";

import { ProductsType } from "@/types/product";
import Image from "next/image";
import logo from "../../../../public/logo.jpg";

export const ProductDetail = ({ data }: { data?: ProductsType }) => {
  return (
    <div className="container">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-3">
          <Image
            src={data?.images?.[0].src ?? logo.src}
            alt={data?.name ?? "Hoang long am thanh so"}
            width={100}
            height={100}
            className="w-full h-full rounded-t-lg"
          />
        </div>
        <div className="">
          <p>{`Giá bán: ${data?.price}`}</p>
        </div>
      </div>
    </div>
  );
};
