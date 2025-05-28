import "./globals.css";
import { Inter } from "next/font/google";
import "swiper/css";
import "swiper/css/navigation";

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={inter.className}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
