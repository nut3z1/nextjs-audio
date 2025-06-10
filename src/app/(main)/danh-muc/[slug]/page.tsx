import {
  getListProductsData,
  getProductsCategories,
} from "@/modules/api/get-products";
import { ProjectContent } from "@/modules/projects/projectContent";
import { CategoriesProductType } from "@/types/product";
import { notFound } from "next/navigation";

const ProjectPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const { data: productsCategories } = await getProductsCategories({
    slug: slug,
  });

  if (!productsCategories.length) {
    notFound();
  }

  const { count: totalCount, id } =
    productsCategories?.[0] as CategoriesProductType;

  const { data } = await getListProductsData({
    category: id,
    per_page: 10,
  });

  return (
    <main>
      <ProjectContent data={data} totalCount={totalCount} />;
    </main>
  );
};

export default ProjectPage;
