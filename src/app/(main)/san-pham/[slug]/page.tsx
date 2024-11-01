import { ProductDetail } from "@/components/Product/ProductDetail";
import { getProductBySlug } from "@/modules/api/get-products";
import { notFound } from "next/navigation";

const ProductPage = async ({ params }: { params: { slug: string } }) => {
  const { data } = await getProductBySlug(params.slug);
  if (!data.length) {
    notFound();
  }
  return <ProductDetail data={data?.[0]} />;
};

export default ProductPage;
