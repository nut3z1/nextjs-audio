"use client";
import Image from "next/image";
import React from "react";
import { Autoplay, Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import { dataBannerHome } from "@/mocks";

export const BannerSlider = () => {
  let settings = {
    navigation: true,
    virtual: false,
    modules: [Navigation, Autoplay],
    autoplay: { delay: 5000 },
    spaceBetween: 30,
    loop: true,
  };
  return (
    <div>
      <Swiper {...settings}>
        {dataBannerHome?.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="">
              <Image
                src={item.src}
                width={898}
                height={460}
                priority
                alt="img hoang long am thanh so"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
