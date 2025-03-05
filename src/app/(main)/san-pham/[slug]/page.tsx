import { ProductDetail } from "@/components/Product/ProductDetail";
import { getProductBySlug } from "@/modules/api/get-products";
import { notFound } from "next/navigation";

const ProductPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const { data } = await getProductBySlug(slug);
  if (!data.length) {
    notFound();
  }
  return <ProductDetail data={data?.[0]} />;
};

export default ProductPage;
