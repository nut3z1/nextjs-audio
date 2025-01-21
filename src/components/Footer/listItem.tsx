"use client";

import { OptionsMenu } from "@/types";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export const ListItem = ({ data }: { data: OptionsMenu[] }) => {
  const segment = useSelectedLayoutSegment();
  return (
    <div>
      {data?.map((item) => (
        <div key={item.label} className="mb-2">
          <Link
            href={item.link ?? "/"}
            className={`hover:text-primary-50 ${
              (segment ?? "/").includes(item?.link ?? "/")
                ? "text-primary-50"
                : ""
            }`}
          >
            {item.label}
          </Link>
        </div>
      ))}
    </div>
  );
};
