// Your React component file

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ASE Auto Service",
  description:
    "Automobile Service Enterprise (ASE) is a car workshop located in Yangon, Myanmar with over 6 years of giving the best servies as possible",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
