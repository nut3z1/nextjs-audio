import { QueryKey } from "@/lib/queriesKey";
import { getListProductsData } from "./get-products";
import { useQuery } from "@tanstack/react-query";
import { ProductsParams } from "@/types/product";

export const useGetProjectList = (params: ProductsParams) => {
  return useQuery({
    queryKey: [QueryKey.ProjectList, params],
    queryFn: () => getListProductsData(params),
  });
};
