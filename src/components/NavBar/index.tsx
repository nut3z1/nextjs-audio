"use client";
import { MenuItemsNodes } from "@/types";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import React from "react";

export const NavBar = ({ data }: { data?: MenuItemsNodes[] }) => {
  const segment = useSelectedLayoutSegment();
  return (
    <div className="bg-[#f7f7f7]">
      <div className=" container flex items-center justify-between py-4">
        <span className="text-sm text-gray-500">
          Thời gian mở cửa: Từ 8h - 18h hàng ngày
        </span>
        <div className="flex items-center gap-4 text-sm">
          {data?.map((item) => (
            <div key={item.label}>
              <Link
                href={item.path ?? "/"}
                className={`hover:text-primary-50 ${
                  (segment ?? '/').includes(item?.path ?? "/")
                    ? "text-primary-50 font-bold"
                    : "text-gray-500"
                }`}
              >
                {item.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
