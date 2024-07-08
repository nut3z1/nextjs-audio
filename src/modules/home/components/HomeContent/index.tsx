import { getAllPostsForHome, getMenuMain } from "@/modules/api/api";
import { getListProductsData, getProductsCategories } from "@/modules/api/get-products";
import { PostResponse } from "@/types";
import { Post } from "../Post";
import { Product } from "../Product";
import bannerImg from "../../../../../public/baner-2024.jpg";
import Image from "next/image";
import { BannerSlider } from "@/components/BannerSlider";
import { RowProduct } from "@/components/Product";

export const HomeContent = async () => {
  const allPosts: PostResponse = await getAllPostsForHome(false);
  const { data: categories } = await getProductsCategories();
  const { data: listData } = await getListProductsData({ per_page:10});
  const dataImg = [bannerImg.src,bannerImg.src]

  return (
    <div>
      {/* <BannerSlider data={dataImg}/> */}
      <RowProduct data={listData} title="DÀN KARAOKE MUA NHIỀU NHẤT"/>
      {/* <Post data={allPosts.edges} /> */}
    </div>
  );
};
