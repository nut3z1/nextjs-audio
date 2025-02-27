"use client";
import { ProductsType } from "@/types/product";
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
  const isFirstRender = useRef(true);

  const [productCart, setProductCart] = useState<ProductsType[]>(() => {
    const savedCart = localStorage.getItem("productCart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    localStorage.setItem("productCart", JSON.stringify(productCart));
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
