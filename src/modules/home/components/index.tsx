import React from "react";
import { getAllPostsForHome } from "../../../lib/api";
import Post from "./post";
import { PostResponse } from "../../../types";

export const HomeContent = async () => {
  const allPosts: PostResponse = await getAllPostsForHome(false);
  return (
    <div>
      {/* <Product data={sp}/> */}
      <Post data={allPosts.edges} />
    </div>
  );
};
