import { ErrorResponse } from "@/types";
import { ProductsReviewsParams } from "@/types/product/product";
import { RevewProductType } from "@/types/product";
import type { UseMutationOptions } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import { createProductReviews } from "./get-products";

export const useCreateProductReviews = (
  options?: UseMutationOptions<
    RevewProductType,
    ErrorResponse,
    ProductsReviewsParams
  >
) =>
  useMutation<RevewProductType, ErrorResponse, ProductsReviewsParams>({
    mutationFn: (payload) => createProductReviews(payload),
    ...options,
  });
