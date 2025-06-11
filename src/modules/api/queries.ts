import { QueryKey } from "@/lib/queriesKey";
import {
  getListProductsData,
  getProductListCategories,
  getProductReviews,
  getProductsCategories,
} from "./get-products";
import { useQuery } from "@tanstack/react-query";
import { ProductsParams, ProductsReviewsParams } from "@/types/product/product";

export const useGetProjectList = (params: ProductsParams) => {
  return useQuery({
    queryKey: [QueryKey.ProjectList, params],
    queryFn: () => getListProductsData(params),
  });
};

export const useGetProductsCategories = (params: ProductsParams) => {
  return useQuery({
    queryKey: [QueryKey.ProjectCategories, params],
    queryFn: () => getProductsCategories(params),
  });
};

export const useGetProductsReviews = (params?: ProductsReviewsParams) => {
  return useQuery({
    queryKey: [QueryKey.ProductReview, params],
    queryFn: () => getProductReviews(params),
  });
};

export const useGetProductListCategories = () => {
  return useQuery({
    queryKey: [QueryKey.ProjectListCategories],
    queryFn: () => getProductListCategories(),
  });
};
