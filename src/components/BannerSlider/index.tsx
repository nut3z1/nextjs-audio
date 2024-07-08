"use client";
import Image from "next/image";
import React from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

export const BannerSlider = ({ data }: { data?: string[] }) => {
  let settings = {
    navigation: true,
    virtual: false,
    modules: [Navigation, Autoplay],
    autoplay: { delay: 2000 },
    spaceBetween: 30,
    loop: true,
  };
  return (
    <div>
      <Swiper {...settings}>
        {data?.map((item) => (
          <SwiperSlide key={item}>
            <div className="">
              <Image
                src={item}
                width={100}
                height={100}
                className="w-full h-full"
                alt="img hoang long am thanh so"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
