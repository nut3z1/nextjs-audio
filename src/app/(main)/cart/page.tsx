import { CartContent } from "@/modules/cart/cartContent";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cart - Hoang Long Am Thanh So",
  description: "Shopping cart page",
};

export default function CartPage() {
  return (
    <main>
      <CartContent />
    </main>
  );
}
