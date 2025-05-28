import { getProductsCategories } from "@/modules/api/get-products";
import { CategoriesProductType } from "@/types/product";
import Link from "next/link";

export const MenuCategories = async () => {
  const categoryId = [156, 146, 145, 140, 141, 138, 162, 144];
  const { data } = await getProductsCategories({
    per_page: 100,
    include: categoryId,
    orderby: "include",
  });

  return (
    <div className="pt-4">
      <div className="flex items-center gap-4">
        {data?.map((item: CategoriesProductType) => (
          <div key={item.id}>
            <Link href={`/danh-muc/${item.id}`}>{item?.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};
