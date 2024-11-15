import type { Metadata } from "next";
import {Roboto} from "next/font/google"
import { Montserrat } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lost&Found",
  description: "Your one-stop solution to reuniting lost items with their owners",
};

const roboto = Roboto({subsets:["latin","cyrillic-ext"], weight:["100","300","500","700","900"]})
const montserrat = Montserrat({subsets:["latin", "cyrillic-ext"]})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased px-6`}
      >
        {children}
      </body>
    </html>
  );
}
