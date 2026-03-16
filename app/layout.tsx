import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Michael Avnyin - Frontend Engineer",
  description: "This is a portfolio showcasing my work as a frontend engineer, including projects, experiments, and contact information.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${/geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
