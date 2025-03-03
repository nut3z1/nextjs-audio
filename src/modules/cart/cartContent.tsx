"use client";
import { CartContext } from "@/components/Cart/cartContext";
import Image from "next/image";
import { useContext, useState } from "react";
import logo from "../../../public/logo.jpg";

export const CartContent = () => {
  const { setProductCart, productCart } = useContext(CartContext);
  const [cartNumber, setCartNumber] = useState<number>(1);
  const removeProductCart = (id: number) => {
    setProductCart((pre) => pre.filter((p) => p.id !== id));
  };
  const onUpdateNumberCart = (id: number, key: string) => {
    setProductCart((pre) =>
      pre.map((item) =>
        item.id === id
          ? {
              ...item,
              totalPrice: `${
                Number(item?.price) *
                (key === "add"
                  ? Number(item.quantity ?? 1) + 1
                  : Number(item.quantity ?? 1) > 1
                  ? Number(item.quantity ?? 1) - 1
                  : 1)
              }`,
              quantity:
                key === "add"
                  ? Number(item.quantity ?? 1) + 1
                  : Number(item.quantity ?? 1) > 1
                  ? Number(item.quantity ?? 1) - 1
                  : 1,
            }
          : item
      )
    );
  };

  const totalPriceProduct = productCart.reduce(
    (acc, curr) => acc + (Number(curr.totalPrice) ?? Number(curr.price)),
    0
  );

  return (
    <div className="container">
      <div className="py-10">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-8">
            <table className="w-full">
              <thead>
                <tr className="text-left">
                  <th></th>
                  <th>Sản phẩm</th>
                  <th>Giá</th>
                  <th>Số lượng</th>
                  <th>Tạm tính</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {productCart?.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <Image
                        src={item.images?.[0].src ?? logo.src}
                        alt={item?.name ?? "Hoang long am thanh so"}
                        width={225}
                        height={225}
                        priority
                        className="rounded-t-lg"
                      />
                    </td>
                    <td>{item.name}</td>
                    <td>{item?.price ? item?.price + " triệu" : "Liên Hệ"}</td>
                    <td>
                      <div className="flex items-center bg-white border border-solid rounded-lg justify-around h-12">
                        <div
                          className="w-5 h-5 cursor-pointer hover:bg-gray-300 rounded flex items-center justify-center "
                          onClick={() => onUpdateNumberCart(item.id, "add")}
                        >
                          +
                        </div>
                        {item.quantity ?? 1}
                        <div
                          className="w-5 h-5 cursor-pointer hover:bg-gray-300 rounded flex items-center justify-center "
                          onClick={() => onUpdateNumberCart(item.id, "remove")}
                        >
                          -
                        </div>
                      </div>
                    </td>
                    <td>{item?.totalPrice ?? item?.price}</td>
                    <td>
                      <div onClick={() => removeProductCart(item.id)}>x</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-span-4">
            <div className="bg-[#00000008] rounded-lg p-6">
              <div>Giỏ hàng</div>
              <div className="flex justify-between">
                <div>Tạm tính</div>
                <div>{`${totalPriceProduct} triệu`}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
