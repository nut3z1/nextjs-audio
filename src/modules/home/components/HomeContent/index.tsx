import { RowProduct } from "@/components/Product";
import { getAllPostsForHome } from "@/modules/api/api";
import { getListProductsData } from "@/modules/api/get-products";
import { PostResponse } from "@/types";
import { BannerHome } from "../Banner";

export const HomeContent = async () => {
  // const allPosts: PostResponse = await getAllPostsForHome(false);
  const { data: listData } = await getListProductsData({ per_page: 10 });
  console.log("listData", listData);
  return (
    <div>
      {/* <BannerSlider data={dataImg}/> */}
      <div className="pb-3">
        <BannerHome />
      </div>
      <RowProduct
        data={listData}
        title="DÀN KARAOKE MUA NHIỀU NHẤT"
        linkProduct="/sanpham"
      />
    </div>
  );
};
