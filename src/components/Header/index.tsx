import { Input } from "@nextui-org/input";
import Image from "next/image";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import logo from "../../../public/logo.jpg";
import { MenuCategories } from "./menuCategories";

export const Header = async () => {
  return (
    <div className="container py-8">
      <div className="flex items-center gap-8">
        <div>
          <Image
            src={logo.src}
            alt="Logo Hoang Long Am Thanh So"
            width={120}
            height={100}
            className="h-full"
          />
        </div>
        <div className="flex-1">
          <Input
            placeholder="Tìm kiếm ...."
            endContent={<CiSearch className="text-2xl" />}
            className="w-full"
          />
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <MdSupportAgent className="text-3xl text-primary-50" />
            <div>
              <p className="text-sm">Hỗ trợ 24/7</p>
              <Link href={"tel:0975 386 726"} className="text-gray-500 text-sm">
                0975 386 726
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <FaUser className="text-3xl text-primary-50" />
            <div>
              <p className="text-sm">Tài Khoản</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <FaShoppingCart className="text-3xl text-primary-50" />
            <div>
              <p className="text-sm">Giỏ Hàng</p>
            </div>
          </div>
        </div>
      </div>
      <MenuCategories/>
    </div>
  );
};
