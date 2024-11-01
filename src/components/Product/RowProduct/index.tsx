"use client";

import { ROUTES } from "@/lib/constants";
import { ProductsType } from "@/types/product";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";
import Rater from "react-rater";
import logo from "../../../../public/logo.jpg";

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
          {linkProduct && <Link href={linkProduct}>Xem tất cả</Link>}
        </div>
      )}
      <div className="grid grid-cols-5 gap-4">
        {data?.map((item) => (
          <Link href={`${ROUTES.SAN_PHAM}/${item?.slug}`} key={item.id}>
            <div className="rounded-lg border border-default border-solid">
              <div>
                <Image
                  src={item.images?.[0].src ?? logo.src}
                  alt={item?.name ?? "Hoang long am thanh so"}
                  width={100}
                  height={100}
                  className="w-full h-full rounded-t-lg"
                />
              </div>
              <div className="px-4 pt-4">
                <div className="pb-2">
                  <div className="text-sm h-12 line-clamp-2">{item.name}</div>
                  {/* {item.price_html ? (
                    <div>{parse(item.price_html)}</div>
                    ) : (
                    <p>{item.price}</p>
                    )} */}
                  <p className="text-red-50">
                    {item?.price ? item?.price + " triệu" : "Liên Hệ"}
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-default border-solid py-2">
                  <Rater total={5} rating={5} />
                  <span className="text-xs">{`Đã bán: ${
                    item.id / 2 < 100 ? 108 : Math.trunc(item.id / 2)
                  }`}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center pt-4">
        <Button
          color="primary"
          variant="bordered"
          endContent={<FaAngleRight />}
        >
          Xem tất cả sản phẩm
        </Button>
      </div>
    </div>
  );
};
