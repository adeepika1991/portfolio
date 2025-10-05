import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Deepika | Portfolio | Senior Frontend Engineer",
  description:
    "Portfolio of a Senior Frontend Engineer with 6 years of experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
