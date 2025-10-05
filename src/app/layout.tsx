import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

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
      <head>
        <Script
          src="http://localhost:3006/pixel.js"
          strategy="afterInteractive"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
