import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import ClientLayout from "@/components/clientLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Handheld Collector Tracker",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-gray-200`}>
        <ClientLayout>{children}</ClientLayout>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
