"use client";

import { ROUTES } from "@/lib/constants";
import { ProductsType } from "@/types/product/product";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/logo.jpg";
import { ListCard } from "./listCard";

export const RowProduct = ({
  data,
  title,
  linkProduct,
}: {
  data: ProductsType[];
  title?: string;
  linkProduct?: string;
}) => {
  return (
    <div className="container">
      {title && (
        <div className="flex items-center justify-between pb-4">
          <div>
            <h2 className="font-bold uppercase text-2xl py-2.5 px-3.5 ">
              {title}
            </h2>
          </div>
          {linkProduct && (
            <Link href={`danh-muc/${linkProduct}`}>Xem tất cả</Link>
          )}
        </div>
      )}
      <div className="grid grid-cols-5 gap-4">
        {data?.map((item) => (
          <Link href={`${ROUTES.SAN_PHAM}/${item?.slug}`} key={item.id}>
            <div className="group rounded-lg border border-default border-solid">
              <div className="relative ">
                <Image
                  src={item.images?.[0].src ?? logo.src}
                  alt={item?.name ?? "Hoang long am thanh so"}
                  width={225}
                  height={225}
                  priority
                  className="rounded-t-lg"
                />
                <ListCard data={item} />
              </div>
              <div className="px-4 pt-4">
                <div className="pb-2">
                  <div className="text-sm h-12 line-clamp-2">{item.name}</div>
                  <p className="text-red-50">
                    {item?.price ? item?.price + " triệu" : "Liên Hệ"}
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-default border-solid py-2">
                  {/* <Rater total={5} rating={5} /> */}
                  <span className="text-xs">{`Đã bán: ${
                    item.id / 2 < 100 ? 108 : Math.trunc(item.id / 2)
                  }`}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
