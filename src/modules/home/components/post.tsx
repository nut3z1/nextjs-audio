"use client";

import Image from "next/image";
import { NodeType } from "../../../types";

export default function Post({ data }: { data?: NodeType[] }) {
  // console.log("data", data);
  return (
    <div>
      {data?.map((item) => (
        <div key={item.node.slug}>
          <Image
            src={item.node.featuredImage?.node.sourceUrl}
            width={100}
            height={100}
            alt="img"
          />
          <h2>{item.node.title}</h2>
        </div>
      ))}
    </div>
  );
}
