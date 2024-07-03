"use client";

import { NodeType } from "@/types";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

export const Post = ({ data }: { data?: NodeType[] }) => {
  let settings = {
    navigation: true,
    virtual: false,
    slidesPerView: 4,
    slidesPerGroup: 1,
    modules: [Navigation, Autoplay],
    autoplay: { delay: 2000 },
    spaceBetween: 30,
  };
  return (
    <div className="container px-10 md:px-4">
      <div className="h-64 text-red-700">
        sdsd
      </div>
      <Swiper {...settings}>
        {data?.map((item) => (
          <SwiperSlide key={item.node.slug} className="mx-2">
            <div className="h-64" >
              <Image
                src={item.node.featuredImage?.node.sourceUrl}
                width={100}
                height={100}
                className="w-full h-full"
                alt="img"
              />
            </div>
            <div className="bg-red-700">
              <h2 className="text-red-700">{item.node.title}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
