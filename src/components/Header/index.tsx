import { Input } from "@nextui-org/input";
import Image from "next/image";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { MdSupportAgent } from "react-icons/md";
import logo from "../../../public/logo.jpg";
import { CardHeader } from "./cardHeader";
import { MenuCategories } from "./menuCategories";

export const Header = async () => {
  return (
    <div className="sticky top-0 left-0 right-0 bg-white z-10">
      <div className="container py-8">
        <div className="flex items-center gap-8">
          <div>
            <Link href="/" title="Logo Hoang Long Am Thanh So">
              <Image
                src={logo.src}
                alt="Logo Hoang Long Am Thanh So"
                width={120}
                height={76}
                priority
              />
            </Link>
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
                <Link
                  href={"tel:0975 386 726"}
                  className="text-gray-500 text-sm"
                >
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
            <CardHeader />
          </div>
        </div>
        <MenuCategories />
      </div>
    </div>
  );
};
