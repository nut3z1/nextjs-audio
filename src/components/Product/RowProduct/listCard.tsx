import { FaHeart } from "react-icons/fa";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { GoLink } from "react-icons/go";
import { PiArrowsOutLight } from "react-icons/pi";
import { Tooltip } from "@nextui-org/tooltip";
import { Button } from "@nextui-org/button";
import { NameCardType } from "@/modules/home/types";
import { ProductsType } from "@/types/product";
import { MouseEvent } from "react";

export const ListCard = ({ data }: { data: ProductsType }) => {
  const listIcon = [
    { icon: <LiaShoppingBagSolid />, title: "Giỏ Hàng", name: "shoppingCart" },
    { icon: <GoLink />, title: "Xem Ngay", name: "seeNow" },
    { icon: <FaHeart />, title: "Yêu Thích", name: "favourite" },
    { icon: <PiArrowsOutLight />, title: "Xem Trước", name: "preview" },
  ];
  const handalOnclick = ({
    event,
    item,
  }: {
    item: any,
    event: MouseEvent<HTMLButtonElement, MouseEvent>;
  }) => {
    if (item.name !== NameCardType.SeeNow) {
      event.preventDefault();
      console.log("data", data);
    }
  };
  return (
    <div className="absolute top-5 right-5 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
      {listIcon.map((item) => (
        <div key={item.name} className="mb-2">
          <Tooltip content={item.title} placement="left">
            <Button
              isIconOnly
              variant="faded"
              aria-label={item.title}
              as={item.name === NameCardType.SeeNow ? "a" : "button"}
              href={item.name === NameCardType.SeeNow ? "a" : undefined}
              onClick={(event) => {
                if (item.name !== NameCardType.SeeNow) {
                  event.preventDefault();
                  console.log("data", data);
                }
              }}
            >
              {item.icon}
            </Button>
          </Tooltip>
        </div>
      ))}
    </div>
  );
};
