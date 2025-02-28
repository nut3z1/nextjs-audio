import { RowProduct } from "@/components/Product";
import { getListProductsData } from "@/modules/api/get-products";
import { BannerHome } from "../Banner";
import ListProduct from "../Product";

export const HomeContent = async () => {
  // const allPosts: PostResponse = await getAllPostsForHome(false);
  const { data: listData } = await getListProductsData({ per_page: 10 });

  const listCatalogue = [
    { title: "Dàn Karaoke", id: 156, url: "/dan-karaoke" },
    { title: "Loa Weeworld", id: 146, url: "/loa-weeworld" },
    { title: "Loa sub", id: 145, url: "loa-sub" },
    { title: "Micro", id: 138, url: "micro" },
  ];

  return (
    <div>
      <div className="pb-3">
        <BannerHome />
      </div>
      <RowProduct
        data={listData}
        title="DÀN KARAOKE MUA NHIỀU NHẤT"
        linkProduct="/sanpham"
      />
      {listCatalogue.map((item) => (
        <ListProduct key={item.id} {...item} />
      ))}
    </div>
  );
};
