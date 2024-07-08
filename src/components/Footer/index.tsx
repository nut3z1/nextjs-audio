import React from "react";
import logoSaleNoti from "../../../public/logoSaleNoti.png";
import logo from "../../../public/logo.jpg";

import Link from "next/link";
import Image from "next/image";
import { MenuItemsNodes } from "@/types";
import { ListItem } from "./listItem";
export const Footer = ({ data }: { data?: MenuItemsNodes[] }) => {
  const Title = (title: string) => (
    <h3 className="text-lg font-bold text-primary-50 mb-3">{title}</h3>
  );
  const dataPage = data
    ?.filter((item) => item.label !== "Trang Chủ")
    ?.map((value) => ({ link: value.path, label: value.label }));
  const dataSupport = [
    {
      link: "https://hoanglongamthanhso.com/huong-dan-thanh-toan",
      label: "Hướng Dẫn Thanh Toán",
    },
    {
      link: "https://hoanglongamthanhso.com/huong-dan-thanh-toan",
      label: "Hướng Dẫn Lắp Đặt",
    },
  ];
  return (
    <div className="bg-gray-50">
      <div className="container">
        <div className="grid grid-cols-10 gap-10 py-10">
          <div className="col-span-4">
            <div className="pb-4">
              <Image
                src={logo.src}
                alt="Hoàng long âm thanh số"
                width={120}
                height={100}
                className="h-full"
              />
            </div>
            <p>
              Hoanglongamthanhso tự hào tin rằng, cung cấp cho bạn các dàn âm
              thanh chuyên nghiệp và đa dạng và không ngừng phấn đấu, nỗ lực
              cùng niêm đam mê.
            </p>
          </div>
          <div className="col-span-2">
            {Title("Về chúng tôi")}
            <ListItem data={dataPage ?? []} />
          </div>
          <div className="col-span-2">
            {Title("Hỗ trợ khách hàng")}
            <ListItem data={dataPage ?? []} />
          </div>
          <div className="col-span-2">
            {Title("Chính sách mua hàng")}
            <ListItem data={dataPage ?? []} />
          </div>
        </div>
        <div className="flex items-center justify-between gap-4 border-t border-default border-solid ">
          <div className="w-full md:w-3/4 2xl:w-3/5">
            Hoàng Long Âm Thanh Số. MST/ĐKKD 01N8022522 Cơ quan cấp: UBND Quận
            Long Biên- Phòng tài chính - Kế hoạch Ngày cấp: 20/04/2021
          </div>
          <div>
            <Link href="http://online.gov.vn/(X(1)S(a022yxpcx3sphju5tdczo1fb))/Home/WebDetails/81506?AspxAutoDetectCookieSupport=1">
              <Image
                src={logoSaleNoti.src}
                alt="Hoàng long âm thanh số"
                width={230}
                height={100}
                className="h-full"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
