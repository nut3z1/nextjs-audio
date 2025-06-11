import { RowProduct } from "@/components/Product";
import {
  getListProductsData,
  getProductsCategories,
} from "@/modules/api/get-products";
import { BannerHome } from "../Banner";
import ListProduct from "../Product";
import { getAllPostsForHome } from "@/modules/api/api";
import { PostResponse } from "@/types";
import { Post } from "../Post";

export const HomeContent = async () => {
  const allPosts: PostResponse = await getAllPostsForHome(false);
  const { data: listData } = await getListProductsData({ per_page: 10 });

  const listCatalogue = [
    { title: "Dàn Karaoke", id: 156, url: "dan-karaoke" },
    { title: "Loa Weeworld", id: 146, url: "loa-weeworld" },
    { title: "Loa sub", id: 145, url: "loa-sub" },
    { title: "Micro", id: 138, url: "micro" },
  ];
  console.log("allPosts", allPosts);
  return (
    <div>
      <div className="pb-3">
        <BannerHome />
      </div>
      <RowProduct
        data={listData}
        title="DÀN KARAOKE MUA NHIỀU NHẤT"
        linkProduct="all"
      />
      {listCatalogue.map((item) => (
        <ListProduct key={item.id} {...item} />
      ))}
      <Post data={allPosts?.edges ?? []} />
    </div>
  );
};
