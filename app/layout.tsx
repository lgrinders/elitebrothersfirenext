import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";


export const metadata: Metadata = {
  title: {
    default: "Elite Brothers Fire | Fire & Safety | Nashville, TN",
    template: "%s | Elite Brothers Fire | Nashville, TN",
  },
  metadataBase: new URL("https://elitebrothersfire.com"),
  keywords: ["Elite Brothers Fire", "Nashville Fire Extinguishers", "Fire Extinguishers", "Nashville Emergency Lighting", "Emergency Lighting", "Murfreesboro Fire Extinguishers", "Top Fire Extguisher Service"],
  description: "Top rated fire extinguisher service in Tennessee, serving all of your fire and safety needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
