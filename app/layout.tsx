import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-Inter",
});

export const metadata: Metadata = {
  title: {
    default: "Fire & Safety | Elite Brothers Fire | Nashville, TN",
    template: "%s | Elite Brothers Fire | Nashville, TN",
  },
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
