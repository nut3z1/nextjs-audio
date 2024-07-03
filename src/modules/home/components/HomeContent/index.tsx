import React from "react";
import { Post } from "../Post";
import { PostResponse } from "@/types";
import { getAllPostsForHome } from "@/modules/api/api";
import { getProductsData } from "@/modules/api/get-products";
import { Product } from "../Product";

export const HomeContent = async () => {
  const allPosts: PostResponse = await getAllPostsForHome(false);
  const { data: products } = await getProductsData(50);

  return (
    <div>
      <Product data={products} />
      <Post data={allPosts.edges} />
    </div>
  );
};
