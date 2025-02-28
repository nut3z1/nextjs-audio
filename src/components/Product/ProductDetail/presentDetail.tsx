import React from "react";
import parse from "html-react-parser";
import {
  ArrowsClockwise,
  CircleWavyCheck,
  Factory,
  HomeIcon,
  ShieldCheckB,
} from "@/components/Icon";
import { Button } from "@nextui-org/button";

export const PresentDetail = () => {
  const presentData = [
    "Tặng 10m Dây loa SWTECHE BD-2S8ED trị giá <span class='text-red-50 font-bold'>250.000đ</span>",
    "Tặng 1 bộ pin sạc trị giá <span class='text-red-50 font-bold'>450.000đ</span>",
    "Tặng 2 rắc neutrik SWTECHE trị giá <span class='text-red-50 font-bold'>120.000đ</span>",
    "Ở đâu bán rẻ chúng tôi bán rẻ hơn - Gọi có giá Rẻ nhất Việt Nam",
    "Miễn phí set up, lắp đặt với đội ngũ kỹ thuật chuyên sâu",
    "<span class='text-red-50 font-bold'>Giao hàng toàn quốc, thanh toán COD</span>",
    "Miễn phí giao hàng trong bán kính 5- 30km",
  ];

  const informationData = [
    { title: "Bảo hành", icon: <ShieldCheckB />, content: "Theo hãng" },
    { title: "1 đổi 1", icon: <ArrowsClockwise />, content: "3 - 7 ngày" },
    { title: "Thương hiệu", icon: <CircleWavyCheck />, content: "Chính hãng" },
    { title: "Nơi sản xuất", icon: <Factory />, content: "Chính hãng" },
  ];

  return (
    <div>
      <div className="pt-3">
        <ul className="bg-green-50 grid grid-cols-4 px-4 py-3 rounded-2xl text-center">
          {informationData?.map((item, index) => (
            <li key={index}>
              <div className="text-xs mb-0.5 flex items-center justify-center gap-1">
                {/* {item.icon} */}
                {item.title}
              </div>
              <strong className="text-sm">{item.content}</strong>
            </li>
          ))}
        </ul>
      </div>
      <div className="border border-solid border-blue-100 rounded-2xl p-6 mt-10 relative">
        <div className="absolute -top-3 bg-white text-blue-100 px-6 w-auto font-bold">
          Khuyến mãi, ưu đãi
        </div>
        <div>
          {presentData.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2.5 mb-2.5 last:mb-0"
            >
              <div className="text-blue-100 bg-blue-50 rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {index + 1}
              </div>
              <div className="text-xs">{parse(item)}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-4">
        <div className="text-center shadow-[0_0_5px_#888] bg-red-50 text-white p-2 rounded-2xl">
          <div className="uppercase font-bold text-sm">Mua ngay</div>
          <span className="text-[13px]">Giao hàng tận nơi nhanh chóng</span>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-2">
          <div className="text-center shadow-[0_0_5px_#888] bg-blue-300 text-white p-2 rounded-2xl">
            <div className="uppercase font-bold text-sm">Chat Zalo</div>
            <span className="text-[13px]">Giải đáp hỗ trợ tức thì</span>
          </div>
          <div className="text-center shadow-[0_0_5px_#888] bg-green-200 text-white p-2 rounded-2xl">
            <div className="uppercase font-bold text-sm">Mua ngay</div>
            <span className="text-[13px]">Giao hàng tận nơi nhanh chóng</span>
          </div>
        </div>
      </div>
    </div>
  );
};
