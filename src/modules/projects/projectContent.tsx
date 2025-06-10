"use client";
import { RowProduct } from "@/components/Product";
import { ProductsType } from "@/types/product";
import { useSearchParams } from "next/navigation";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/Ui/pagination";

export const ProjectContent = ({
  data,
  totalCount,
}: {
  data?: ProductsType[];
  totalCount?: number;
}) => {
  const searchParams = useSearchParams();
  const pageIndex = parseInt(searchParams.get("pageIndex") || "0");
  const pageSize = parseInt(searchParams.get("pageSize") || "10");
  const totalPages = totalCount ? Math.ceil(totalCount / pageSize) : 0;

  const createPageLink = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("pageIndex", page.toString());
    return `?${params.toString()}`;
  };

  const renderPageLinks = () => {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <PaginationItem key={i}>
          <PaginationLink href={createPageLink(i)} isActive={i === pageIndex}>
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }

    return pages;
  };
  console.log("totalCount", totalCount);
  return (
    <div className="container">
      <div className="py-10">
        <RowProduct data={data ?? []} />
      </div>
      <div>
        {totalPages > 1 && (
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href={pageIndex > 1 ? createPageLink(pageIndex - 1) : "#"}
                />
              </PaginationItem>
              {renderPageLinks()}
              <PaginationItem>
                <PaginationNext
                  href={
                    pageIndex < totalPages ? createPageLink(pageIndex + 1) : "#"
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </div>
    </div>
  );
};
