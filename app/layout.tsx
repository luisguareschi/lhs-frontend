import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "./providers";
import QueryProviders from "./query_providers";
const inter = Inter({ subsets: ["latin"] });
import { Toaster } from "react-hot-toast";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "1Luxemburg - Hispanic- American Services",
  description: "1Luxembourg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={cn(inter.className, "custom-scrollbar")}>
        <Providers>
          <QueryProviders>
            {children}
            <Toaster />
          </QueryProviders>
        </Providers>
      </body>
    </html>
  );
}
