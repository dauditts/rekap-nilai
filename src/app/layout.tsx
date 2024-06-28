import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import PrelineScript from "./components/PrelineScript";
import Header from "./components/Header";
import Breadcrumb from "./components/Breadcrumb";
import Sidebar from "./components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rekap Nilai (MHJ)",
  description: "Web Rekap Nilai Dosen Pengampu Daud Muhajir",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Header /> */}
        {/* Main Content */}
        {/* <Breadcrumb /> */}
        <Sidebar />
        {children}
      </body>
      <PrelineScript />
    </html>
  );
}
