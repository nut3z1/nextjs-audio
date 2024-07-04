import { getAllPostsForHome, getMenuMain } from "@/modules/api/api";
import { getListProductsData, getProductsCategories } from "@/modules/api/get-products";
import { PostResponse } from "@/types";
import { Post } from "../Post";
import { Product } from "../Product";
import bannerImg from "../../../../../public/baner-2024.jpg";
import Image from "next/image";

export const HomeContent = async () => {
  const allPosts: PostResponse = await getAllPostsForHome(false);
  const { data: categories } = await getProductsCategories();
  const { data: listData } = await getListProductsData({ per_page:20, category: 156});
  return (
    <div>
      <Image src={bannerImg.src} width={100} height={100} alt="banner hoang long am thanh so" className="w-full h-full" />
      <Product data={listData} categories={categories} />
      <Post data={allPosts.edges} />
    </div>
  );
};
