import { QueryKey } from "@/lib/queriesKey";
import {
  getListProductsData,
  getProductReviews,
  getProductsCategories,
} from "./get-products";
import { useQuery } from "@tanstack/react-query";
import { ProductsParams } from "@/types/product";

export const useGetProjectList = (params: ProductsParams) => {
  return useQuery({
    queryKey: [QueryKey.ProjectList, params],
    queryFn: () => getListProductsData(params),
  });
};

export const useGetProductsCategories = (params: ProductsParams) => {
  return useQuery({
    queryKey: [QueryKey.ProjectListCategories, params],
    queryFn: () => getProductsCategories(params),
  });
};

export const useGetProductsReviews = (params?: ProductsParams) => {
  return useQuery({
    queryKey: [QueryKey.ProductReview, params],
    queryFn: () => getProductReviews(params),
  });
};
