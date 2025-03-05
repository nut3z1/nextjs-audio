"use client";
import { NextUIProvider } from "@nextui-org/react";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const Providers = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            staleTime: 30 * 1000,
          },
        },
      })
  );
  return (
    <NextUIProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </NextUIProvider>
  );
};
