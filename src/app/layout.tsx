import type { Metadata } from "next";
import { Poppins, Geist } from "next/font/google";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Toothsuite Dental Clinic | Luxury Smile Studio",
  description: "Experience premium dental care at Toothsuite Dental Clinic in Kerala. We offer smile designing, veneers, aligners, implants, and more in a luxury environment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full", "antialiased", "scroll-smooth", "font-sans", geist.variable)}>
      <body className={`${poppins.variable} font-sans min-h-full flex flex-col selection:bg-brand-blue/20`}>
        <SmoothScroll>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
