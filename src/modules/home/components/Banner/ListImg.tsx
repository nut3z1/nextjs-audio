import Image from "next/image";
import React from "react";
import { BannerHome } from "@/types/home";
import styles from "./styles.module.css";

export const ListImg = ({
  data,
  viewColumn = false,
}: {
  data: BannerHome[];
  viewColumn?: boolean;
}) => {
  return (
    <div
      className={`${viewColumn ? "grid-cols-3" : "grid-cols-1"} grid gap-3 `}
    >
      {data.map((item, index) => (
        <div
          key={index}
          className={`${styles.effectsImg} relative w-full overflow-hidden ${
            viewColumn ? "h-[250px]" : "h-[230px]"
          }`}
        >
          <Image
            src={item.src}
            fill
            className="rounded-md object-cover"
            alt="img hoang long am thanh so"
          />
        </div>
      ))}
    </div>
  );
};
