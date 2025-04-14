"use client";
// import { Badge } from "@nextui-org/react";
import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../Cart/cartContext";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export const CardHeader = () => {
  const { productCart } = useContext(CartContext);

  return (
    <div className="flex items-center gap-3">
      <div className="relative inline-block">
        <FaShoppingCart className="text-3xl text-primary-50" />
        {productCart.length ? (
          <Badge
            className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 rounded-full px-2 py-0 text-xs"
            variant="destructive"
          >
            {productCart.length}
          </Badge>
        ) : null}
      </div>
      <div>
        <Link href="/cart" title="Cart">
          <p className="text-sm">Giỏ Hàng</p>
        </Link>
      </div>
    </div>
  );
};
