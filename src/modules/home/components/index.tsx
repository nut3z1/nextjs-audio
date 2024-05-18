import React from "react";
import { getAllPostsForHome } from "../../../lib/api";
import Post from "./post";
import { PostResponse } from "../../../types";
import Product from "./product";
import { getProductsCategories, getProductsData } from "../../../../pages/api/get-products";

export const HomeContent = async () => {
  const allPosts: PostResponse = await getAllPostsForHome(false);
  const { data: products } = await getProductsData(50);
  const { data: categories } = await getProductsCategories(50);

  console.log('products',products)
  return (
    <div>
      <Product data={products} categories={categories}/>
      <Post data={allPosts.edges}  />
    </div>
  );
};
