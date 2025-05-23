"use client";

import { SymbolX } from "@/components/Icon/Symbol";
import { Button, Input } from "@/components/Ui";
import { Textarea } from "@/components/Ui/textarea";
import { useGetProductsReviews } from "@/modules/api/queries";
import { RevewProductType } from "@/types/review";
import parse from "html-react-parser";
import Image from "next/image";
import { useState } from "react";

export const ProductRevew = ({ id }: { id?: number }) => {
  const payload = { product: id, per_page: 10 };
  const { data: dataRevew } = useGetProductsReviews(payload);
  const [showProfile, setShowProfile] = useState(false);

  const handalSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const message = formData.get("message") as string;
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    console.log("message", message);
  };

  return (
    <div className="py-10">
      <div className="font-bold text-xl mb-2">
        {`Hỏi và đáp ${
          dataRevew?.data.length ? `(${dataRevew?.data.length} Bình luận)` : ""
        }`}
      </div>
      <form onSubmit={handalSubmit}>
        <Textarea placeholder="Type your message here." />
        <div className="mt-4 bg-gray-50 p-4 rounded">
          <div className="grid grid-cols-2 gap-4">
            <Input type="text" placeholder="Name" />
            <div className="flex items-center gap-4">
              <Input type="email" placeholder="Email" className="flex-1" />
              <SymbolX />
            </div>
          </div>
          <Button type="submit" className="mt-4">
            Gửi Bình Luận
          </Button>
        </div>
      </form>
      <div className="pt-4">
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
