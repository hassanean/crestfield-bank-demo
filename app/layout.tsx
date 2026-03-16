import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Crestfield Bank — Banking Built for Your Future",
  description:
    "Crestfield Bank offers personal and business banking, mortgages, investments, and more. FDIC insured. Trusted by 2 million customers.",
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
