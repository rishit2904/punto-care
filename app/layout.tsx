import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PuntoCare - Fiat Punto Maintenance & DIY Guides",
  description: "Your complete DIY maintenance guide for the Fiat Punto 1.3 Multijet Diesel. Step-by-step tutorials, specifications, and troubleshooting tips.",
  keywords: ["Fiat Punto", "car maintenance", "DIY repair", "1.3 Multijet", "diesel", "service guide"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <ChatBot />
      </body>
    </html>
  );
}
