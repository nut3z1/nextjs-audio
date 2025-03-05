"use client";
import { Badge } from "@nextui-org/react";
import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../Cart/cartContext";
import Link from "next/link";

export const CardHeader = () => {
  const { productCart } = useContext(CartContext);

  return (
    <div className="flex items-center gap-3">
      <Badge
        color="danger"
        content={productCart.length}
        shape="rectangle"
        showOutline={false}
        isInvisible={!productCart.length}
      >
        <FaShoppingCart className="text-3xl text-primary-50" />
      </Badge>
      <div>
        <Link href="/cart" title="Cart">
          <p className="text-sm">Giỏ Hàng</p>
        </Link>
      </div>
    </div>
  );
};
