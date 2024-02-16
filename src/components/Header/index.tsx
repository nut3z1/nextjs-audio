import { Input } from "@mantine/core";
import Image from "next/image";
import React from "react";
import { CiSearch } from "react-icons/ci";

export const Header = () => {
  return (
    <div className="container py-4">
      <div className="flex items-center gap-10">
        <div>
          <Image
            src={
              "https://hoanglongamthanhso.com/wp-content/uploads/2023/08/162131365354.png"
            }
            width={190}
            height={37}
            alt="logo"
          />
        </div>
        <div>
        <Input placeholder="Tìm kiếm" rightSection={<CiSearch/>} w={500} />
        </div>
      </div>
    </div>
  );
};
