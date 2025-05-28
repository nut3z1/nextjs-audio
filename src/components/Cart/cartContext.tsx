"use client";
import { ProductsType } from "@/types/product/product";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

interface CartContextType {
  productCart: ProductsType[];
  setProductCart: Dispatch<SetStateAction<ProductsType[]>>;
}

const defaultValue: CartContextType = {
  productCart: [],
  setProductCart: () => {},
};

export const CartContext = createContext<CartContextType>(defaultValue);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [productCart, setProductCart] = useState<ProductsType[]>([]);

  useEffect(() => {
    if (!productCart) {
      const savedCart = localStorage.getItem("productCart");
      if (savedCart) {
        setProductCart(JSON.parse(savedCart));
      }
    } else {
      localStorage.setItem("productCart", JSON.stringify(productCart));
    }
  }, [productCart]);

  return (
    <CartContext.Provider
      value={{
        productCart,
        setProductCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
