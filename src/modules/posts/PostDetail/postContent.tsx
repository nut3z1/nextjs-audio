import Image from "next/image";
import React from "react";
import parse from "html-react-parser";
import { PostFields } from "@/types/post";

export default function PostContent({
  post,
  posts,
}: {
  post?: PostFields;
  posts?: any;
}) {
  console.log("post", post);
  return (
    <div className="">
      <div className="relative h-96">
        <Image
          src={post?.featuredImage?.node?.sourceUrl ?? ""}
          alt="Hoàng long âm thanh số"
          width={1440}
          height={384}
          className="object-cover w-full h-[500px]"
        />
      </div>
      <div className="max-w-4xl mx-auto bg-white py-12 px-12 lg:px-24 -mt-32 relative z-1">
        <h2 className="mt-4 uppercase tracking-widest text-xs text-gray-600">
          23 Sep 2020
        </h2>
        <h1 className="font-display text-2xl md:text-3xl text-gray-900 mt-4">
          {post?.title}
        </h1>
        <div className="prose prose-sm sm:prose lg:prose-lg mt-6">
          {parse(post?.content ?? "")}
        </div>
      </div>
    </div>
  );
}
