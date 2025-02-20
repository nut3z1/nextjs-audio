import React from "react";

export const PresentDetail = () => {
  const presentData = [
    "Tặng 10m Dây loa SWTECHE BD-2S8ED trị giá 250.000đ",
    "Tặng 1 bộ pin sạc trị giá 450.000đ",
    "Tặng 2 rắc neutrik SWTECHE trị giá 120.000đ",
    "Ở đâu bán rẻ chúng tôi bán rẻ hơn - Gọi có giá Rẻ nhất Việt Nam",
    "Miễn phí set up, lắp đặt với đội ngũ kỹ thuật chuyên sâu",
    "Giao hàng toàn quốc, thanh toán COD",
    "Miễn phí giao hàng trong bán kính 5- 30km",
  ];

  return (
    <div>
      <div className="pt-3">
        <ul className="bg-green-50 grid grid-cols-4 px-4 py-3 rounded-2xl text-center">
          <li>
            <div className="text-xs mb-0.5">Bảo hành</div>
            <strong className="text-sm">Theo hãng</strong>
          </li>
          <li>
            <div className="text-xs mb-0.5">1 đổi 1</div>
            <strong className="text-sm text-blue-400">3 - 7 ngày</strong>
          </li>
          <li>
            <div className="text-xs mb-0.5">Thương hiệu</div>
            <strong className="text-sm">Chính hãng</strong>
          </li>
          <li>
            <div className="text-xs mb-0.5">Nơi sản xuất</div>
            <strong className="text-sm">Chính hãng</strong>
          </li>
        </ul>
      </div>
      <div className="border border-solid border-blue-100 rounded-2xl p-6">
        <div>Khuyến mãi, ưu đãi</div>
        <div>
          {presentData.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2.5 mb-2.5 last:mb-0"
            >
              <div className="text-blue-100 bg-blue-50 rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {index + 1}
              </div>
              <div className="text-xs">{item}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
