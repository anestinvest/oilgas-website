import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OILGAS | Energy Logistics",
  description:
    "OILGAS delivers lubricants, base oils, raw materials, and energy logistics with precision and reliability."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-graphite text-slate-100 antialiased">{children}</body>
    </html>
  );
}
