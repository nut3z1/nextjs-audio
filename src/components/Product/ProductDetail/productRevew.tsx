"use client";

import { SymbolX } from "@/components/Icon/Symbol";
import { Button, Input } from "@/components/Ui";
import { Textarea } from "@/components/Ui/textarea";
import { QueryKey } from "@/lib/queriesKey";
import { useCreateProductReviews } from "@/modules/api/mutations";
import { useGetProductsReviews } from "@/modules/api/queries";
import { ProductsReviewsParams } from "@/types/product/product";
import { RevewProductType } from "@/types/product";
import { useQueryClient } from "@tanstack/react-query";
import parse from "html-react-parser";
import Image from "next/image";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

export const ProductRevew = ({ id }: { id?: number }) => {
  const payload = { product: id, per_page: 10 };
  const { data: dataRevew } = useGetProductsReviews(payload);
  const [showProfile, setShowProfile] = useState(false);
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProductsReviewsParams>();

  const onSubmit: SubmitHandler<ProductsReviewsParams> = (data) =>
    void mutateAsync({ ...data, product_id: id, rating: 5 });

  const TextRequied = ({ text }: { text?: string }) => (
    <div className="text-red-50 mt-2 text-sm">
      {text ?? `This field is required`}
    </div>
  );
  const { mutateAsync } = useCreateProductReviews({
    onSuccess: (resp, vars) => {
      const responseData = resp;
      // const errorMess = resp.error;
      void queryClient.invalidateQueries({
        queryKey: [QueryKey.ProductReview],
      });

      console.log("responseData", responseData);
      reset();
      if (responseData) {
      } else {
        // notifyError(errorMess);
      }
    },
    onError: () => {
      // notifyError();
    },
  });
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
          {...register("review", { required: true })}
          onFocus={() => setShowProfile(true)}
          placeholder="Type your message here."
        />
        {errors.review && <TextRequied />}
        {showProfile ? (
          <div className="mt-4 bg-gray-50 p-4 rounded">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Input
                  {...register("reviewer", { required: true })}
                  type="text"
                  placeholder="Name"
                />
                {errors.reviewer && <TextRequied />}
              </div>
              <div>
                <div className="flex items-center gap-4">
                  <Input
                    {...register("reviewer_email", { required: true })}
                    type="email"
                    placeholder="Email"
                    className="flex-1"
                  />
                  <SymbolX
                    className="hover:text-primary-50"
                    onClick={() => setShowProfile(false)}
                  />
                </div>
                {errors.reviewer_email && <TextRequied />}
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
