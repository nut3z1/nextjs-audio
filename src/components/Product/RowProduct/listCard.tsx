"use client";
import { CartContext } from "@/components/Cart/cartContext";
import { NameCardType } from "@/modules/home/types";
import { ProductsType } from "@/types/product/product";
import { Button } from "@/components/Ui";
import {
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  Tooltip as TooltipWrapper,
} from "@/components/Ui/tooltip";
import { MouseEvent, useContext } from "react";
import { FaHeart } from "react-icons/fa";
import { GoLink } from "react-icons/go";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { PiArrowsOutLight } from "react-icons/pi";

const listIcon = [
  {
    icon: <LiaShoppingBagSolid />,
    title: "Giỏ Hàng",
    name: NameCardType.ShoppingCart,
  },
  { icon: <GoLink />, title: "Xem Ngay", name: NameCardType.SeeNow },
  { icon: <FaHeart />, title: "Yêu Thích", name: NameCardType.Favourite },
  {
    icon: <PiArrowsOutLight />,
    title: "Xem Trước",
    name: NameCardType.Preview,
  },
];

export const ListCard = ({ data }: { data: ProductsType }) => {
  const { setProductCart, productCart } = useContext(CartContext);

  const handleOnClick = (
    event: MouseEvent<HTMLButtonElement>,
    item: NameCardType
  ) => {
    if (item !== NameCardType.SeeNow) {
      event.preventDefault();

      const isInCart = productCart?.some((p) => p.id === data.id);
      if (!isInCart) {
        setProductCart((prev) => [...prev, data]);
      }
    }
  };
  return (
    <div className="absolute top-5 right-5 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
      {listIcon.map((item) => (
        <div key={item.name} className="mb-2">
          <TooltipProvider>
            <TooltipWrapper>
              <TooltipTrigger asChild>
                <Button
                  aria-label={item.title}
                  onClick={(event) => handleOnClick(event, item.name)}
                >
                  {item.icon}
                </Button>
              </TooltipTrigger>
              <TooltipContent side="left">{item.title}</TooltipContent>
            </TooltipWrapper>
          </TooltipProvider>
        </div>
      ))}
    </div>
  );
};
