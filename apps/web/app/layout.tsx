import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PrepOS - Placement Readiness Platform",
  description: "AI-powered placement preparation with adaptive learning and mock interviews",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}