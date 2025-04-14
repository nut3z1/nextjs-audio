"use client";

import { useGetProductsReviews } from "@/modules/api/queries";
import { RevewProductType } from "@/types/review";
import parse from "html-react-parser";
import Image from "next/image";

export const ProductRevew = ({ id }: { id?: number }) => {
  const payload = { product: id, per_page: 10 };
  const { data: dataRevew } = useGetProductsReviews(payload);
  console.log("dataRevew", dataRevew?.data);

  return (
    <div className="py-10">
      <div className="font-bold text-xl mb-2">{`Hỏi và đáp ${
        dataRevew?.data.length ? `(${dataRevew?.data.length} Bình luận)` : ""
      }`}</div>
      <div className="sds">
        {dataRevew?.data?.map((item: RevewProductType) => (
          <div
            key={item?.id}
            className="border-t border-solid border-[#eee] py-3"
          >
            <div className="flex items-center gap-3">
              <div>
                <Image
                  src={item?.reviewer_avatar_urls?.[24]}
                  alt={item?.reviewer}
                  width={20}
                  height={20}
                  className="rounded-full"
                />
              </div>
              <div>{item?.reviewer ?? item?.reviewer_email}</div>
            </div>
            <div>{parse(item?.review ?? "")}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
