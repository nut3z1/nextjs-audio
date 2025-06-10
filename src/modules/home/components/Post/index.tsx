"use client";

import { NodeType } from "@/types";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import logo from "../../../../../public/logo.jpg";

export const Post = ({ data }: { data?: NodeType[] }) => {
  let settings = {
    navigation: true,
    virtual: false,
    slidesPerView: 4,
    slidesPerGroup: 1,
    modules: [Navigation, Autoplay],
    autoplay: { delay: 80000 },
    spaceBetween: 30,
  };
  return (
    <div className="container py-5">
      <h2 className="font-bold uppercase text-2xl py-2.5 px-3.5 ">Tin tức</h2>
      <Swiper {...settings}>
        {data?.map((item) => (
          <SwiperSlide key={item.node.slug} className="mx-2">
            <div className="h-64">
              <Image
                src={item.node.featuredImage?.node.sourceUrl ?? logo.src}
                width={100}
                height={100}
                className="w-full h-full object-cover"
                alt="img"
              />
            </div>
            <div className="">
              <h2 className="text-red-700">{item.node.title}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
