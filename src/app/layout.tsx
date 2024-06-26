import type { Metadata } from "next";
import { Itim } from "next/font/google";
import NavBar from "./ui/nav_bar";
import { CartProvider } from "@/app/api/cart";
import "./globals.css";
import { SessionProvider } from "next-auth/react";

const itim = Itim({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["400"],
  variable: "--font-itim",
});

export const metadata: Metadata = {
  title: "GMS",
  description: "Game Market Sample",
  authors: [{ name: "TOwInOK" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`w-screen h-screen p-28 flex-col justify-start items-start gap-2.5 flex bg-white text-black fill-black dark:text-white dark:bg-black dark:fill-white`}
      >
        <SessionProvider>
          <CartProvider>
            <NavBar />
            <main
              className={`${itim.className} self-stretch grow shrink basis-0 px-5 py-9 rounded-lg border-8  border-dashed flex justify-center items-center gap-14 border-black dark:border-white`}
            >
              {children}
            </main>
          </CartProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
