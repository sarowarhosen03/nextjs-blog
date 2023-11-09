import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "@/components/navBar/navBar";
import React from "react";
import Providers from "@/components/Providers";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <Providers>
          <NavBar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}