import type { Metadata } from "next";
import { Bebas_Neue, Montserrat } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({ 
  weight: '400',
  subsets: ["latin"], 
  variable: '--font-bebas' 
});

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  variable: '--font-montserrat' 
});

export const metadata: Metadata = {
  title: "AV Gardens FC | Home of Lahore Football",
  description: "Official website of AV Gardens FC, a grassroots community football club in Lahore, Pakistan.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${bebas.variable} ${montserrat.variable} antialiased bg-bone font-montserrat`}>
        {children}
      </body>
    </html>
  );
}
