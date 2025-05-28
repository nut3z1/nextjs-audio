import {
  getListProductsData,
  getProductsCategories,
} from "@/modules/api/get-products";
import { ProjectContent } from "@/modules/projects/projectContent";
import { notFound } from "next/navigation";

const ProjectPage = async ({
  params,
}: {
  params: Promise<{ slug: number }>;
}) => {
  const { slug } = await params;
  const { data } = await getListProductsData({ category: slug, per_page: 10 });
  if (!data.length) {
    notFound();
  }
  return (
    <main>
      <ProjectContent data={data} />;
    </main>
  );
};

export default ProjectPage;
