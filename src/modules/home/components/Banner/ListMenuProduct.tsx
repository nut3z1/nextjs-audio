import React from "react";
import { dataMenuProduct } from "@/mocks";
import Link from "next/link";
import Image from "next/image";
import { MdChevronRight } from "react-icons/md";
import { getProductsCategories } from "@/modules/api/get-products";
import { CategoriesProductType } from "@/types/product";

export const LisMenuProduct = async () => {
  const categoryId = [156, 146, 140, 142, 143, 138, 139, 145, 144, 162, 161];
  const { data } = await getProductsCategories({
    per_page: 100,
    include: categoryId,
    orderby: "include",
  });
  console.log("data", data);
  return (
    <ul className="shadow-[0_0_6px_0_rgba(0,0,0,.2)]">
      {data?.map((item: CategoriesProductType, index: number) => (
        <li
          key={index}
          className={`group p-2 hover:bg-primary-50 hover:text-white ${
            index + 1 !== dataMenuProduct.length
              ? "border-b border-divide border-solid"
              : ""
          }`}
        >
          <Link href={`danh-muc/${item?.id}`}>
            <div className="flex items-center gap-3">
              <Image
                alt="icon"
                src={
                  "https://hoanglongcomputer.vn/media/category/cat_icon_34_1618893917.png"
                }
                width={25}
                height={25}
              />
              <span>{item.name}</span>
              <MdChevronRight className="group-hover:text-white ml-auto" />
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};
