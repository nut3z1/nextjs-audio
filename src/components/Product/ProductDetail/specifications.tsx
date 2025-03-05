import { ProductsType } from "@/types/product";
import React from "react";

export const Specifications = ({ data }: { data?: ProductsType }) => {
  return (
    <div className="py-10">
      <div className="text-base text-blue-400 border-b-3 border-solid border-blue-400 mb-2 text-center h-10">
        Thông số kỹ thuật
      </div>
      <table className="w-full">
        <tbody>
          {data?.attributes?.map((item) => (
            <tr key={item.id} className="odd:bg-[#F2F4F7] text-sm">
              <td className="w-[180px] font-semibold p-2.5">{item.name}</td>
              <td className="w-[calc(100% - 180px)] capitalize">
                {item.options.join(",")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
