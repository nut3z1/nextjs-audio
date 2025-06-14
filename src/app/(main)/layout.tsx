import { CartProvider } from "@/components/Cart/cartContext";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { NavBar } from "@/components/NavBar";
import { Providers } from "@/components/Providers";
import { getMenuMain } from "@/modules/api/api";
import type { Metadata } from "next";

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
    <main>
      <CartProvider>
        <Providers>
          <NavBar data={menu} />
          <Header />
          {children}
          <Footer data={menu} />
        </Providers>
      </CartProvider>
    </main>
  );
}
