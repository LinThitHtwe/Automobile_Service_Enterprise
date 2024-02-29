import type { Metadata } from "next";
import Head from "next/head"; // Import the Head component
import "./globals.css";

export const metadata: Metadata = {
  title: "ASE Auto Service",
  description:
    "Discover top-notch automobile services at ASE Auto Service in Yangon, Myanmar. With over 6 years of experience, we are dedicated to providing the best car repair and maintenance services. Our skilled technicians ensure your vehicle receives expert care, delivering reliable solutions for all your automotive needs.",
  keywords: [
    "ASE Auto Service",
    "Automobile Service Enterprise",
    "Yangon car workshop",
    "car repair Yangon",
    "car workshop",
    "workshop",
    "workshop Yangon",
    "automobile service Myanmar",
    "car maintenance",
    "best auto workshop",
    "best auto workshop in Myanmar",
    "vehicle diagnostics",
    "affordable car repair",
  ],
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
