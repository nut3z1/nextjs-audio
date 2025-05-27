import ENDPOINTS from "@/lib/endpoints";
import { ProductsParams, ProductsReviewsParams } from "@/types/product";

const WooCommerceRestApi = require("woocommerce-rest-ts-api").default;

const api = new WooCommerceRestApi({
  url: process.env.NEXT_PUBLIC_WORLDPRESS_SITE_URL,
  consumerKey: "ck_f3dc21f71cababb062e18629bfaa4191ddfe5023",
  consumerSecret: "cs_adc3fbd326b33e9472b0cf8902df894efe2ae3bb",
  version: "wc/v3",
  // queryStringAuth: false, // Force Basic Authentication as query string true and using under HTTPS
});

export const getProductsData = async (perPage = 50) => {
  return await api.get(ENDPOINTS.PRODUCTS, {
    per_page: perPage || 50,
  });
};

export const getProductsCategories = async (payload?: ProductsParams) => {
  return await api.get(ENDPOINTS.PRODUCTS_CATEGORIES, payload);
};

export const getListProductsData = async (payload: ProductsParams) => {
  return await api.get(ENDPOINTS.PRODUCTS, payload);
};

export const getProductBySlug = async (productSlug = "") => {
  return await api.get(ENDPOINTS.PRODUCTS, {
    slug: productSlug,
  });
};

export const getProductCategories = async (productSlug = "") => {
  return await api.get(ENDPOINTS.PRODUCTS, {
    slug: productSlug,
  });
};

export const getProductListCategories = async () => {
  return await api.get(ENDPOINTS.PRODUCTS_CATEGORIES);
};

export const getProductReviews = async (payload?: ProductsReviewsParams) => {
  return await api.get(ENDPOINTS.PRODUCTS_REVIEWS, payload);
};
