import Footer from "@/components/footer";
import Header from "@/components/header";
import UIProvider from "@/providers/UIProvider";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "ClickQura IT Solution – Reliable IT Services for Businesses & Institutions",
  description:
    "ClickQura IT Solution provides expert IT services including AMC, hardware & software solutions, asset rentals, consultancy, cloud, and security systems. We serve SMBs, educational institutions, corporates, and industries like healthcare and manufacturing with professional support and innovative IT solutions.",
  keywords:
    "ClickQura IT Solution, IT services, Annual Maintenance Contract, AMC services, hardware support, software support, IT rentals, IT asset rental, IT consultancy, IT procurement, computer repairs, IT upgrades, biometric systems, CCTV installation, cloud services, email setup, managed IT services, business IT support, educational IT solutions, corporate IT solutions, IT for healthcare, IT for manufacturing, small business IT support, India IT solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={montserrat.className}>
        <UIProvider>
          <Header />
          {children}
          <Footer />
        </UIProvider>
      </body>
    </html>
  );
}
