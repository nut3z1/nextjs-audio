import type { Metadata } from "next";
import { NextUIProvider } from "@nextui-org/react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { getMenuMain } from "@/modules/api/api";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const menu = await getMenuMain();
  return (
    <NextUIProvider >
      <NavBar data={menu}/>
      <Header />
      {children}
      <Footer data={menu}/>
    </NextUIProvider>
  );
}
