"use client";

import { useGetProjectList } from "@/modules/api/queries";
import { ListProductType } from "../../types";
import { RowProduct } from "@/components/Product";

export default function ListProduct(props: ListProductType) {
  const { data } = useGetProjectList({
    category: props.id,
    per_page: 10,
  });
  return (
    <RowProduct
      data={data?.data ?? []}
      title={props.title}
      linkProduct={props.url}
    />
  );
}
