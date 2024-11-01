import React from "react";
import { dataMenuProduct } from "@/mocks";
import Link from "next/link";
import Image from "next/image";
import { MdChevronRight } from "react-icons/md";

export const LisMenuProduct = () => {
  return (
    <ul className="shadow-[0_0_6px_0_rgba(0,0,0,.2)]">
      {dataMenuProduct.map((item, index) => (
        <li
          key={index}
          className={`group p-2 hover:bg-primary-50 hover:text-white ${
            index + 1 !== dataMenuProduct.length
              ? "border-b border-divide border-solid"
              : ""
          }`}
        >
          <Link href={item.src}>
            <div className="flex items-center gap-3">
              <Image alt="icon" src={item.src} width={25} height={25} />
              <span>{item.title}</span>
              <MdChevronRight className="group-hover:text-white ml-auto" />
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};
