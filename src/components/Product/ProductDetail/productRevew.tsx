"use client";

import { SymbolX } from "@/components/Icon/Symbol";
import { Button, Input } from "@/components/Ui";
import { Textarea } from "@/components/Ui/textarea";
import { useGetProductsReviews } from "@/modules/api/queries";
import { RevewProductType } from "@/types/review";
import parse from "html-react-parser";
import Image from "next/image";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormRevew = {
  name?: string;
  email?: string;
  message?: string;
};

export const ProductRevew = ({ id }: { id?: number }) => {
  const payload = { product: id, per_page: 10 };
  const { data: dataRevew } = useGetProductsReviews(payload);
  const [showProfile, setShowProfile] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormRevew>();

  const onSubmit: SubmitHandler<FormRevew> = (data) => console.log(data);

  const TextRequied = ({ text }: { text?: string }) => (
    <div className="text-red-50 mt-2 text-sm">
      {text ?? `This field is required`}
    </div>
  );

  console.log("errors", errors);
  return (
    <div className="py-10">
      <div className="font-bold text-xl mb-2">
        {`Hỏi và đáp ${
          dataRevew?.data.length ? `(${dataRevew?.data.length} Bình luận)` : ""
        }`}
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Textarea
          {...register("message", { required: true })}
          onFocus={() => setShowProfile(true)}
          placeholder="Type your message here."
        />
        {errors.message && <TextRequied />}
        {showProfile ? (
          <div className="mt-4 bg-gray-50 p-4 rounded">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Input
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="Name"
                />
                {errors.name && <TextRequied />}
              </div>
              <div>
                <div className="flex items-center gap-4">
                  <Input
                    {...register("email", { required: true })}
                    type="email"
                    placeholder="Email"
                    className="flex-1"
                  />
                  <SymbolX
                    className="hover:text-primary-50"
                    onClick={() => setShowProfile(false)}
                  />
                </div>
                {errors.email && <TextRequied />}
              </div>
            </div>
            <Button type="submit" className="mt-4">
              Gửi Bình Luận
            </Button>
          </div>
        ) : null}
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
