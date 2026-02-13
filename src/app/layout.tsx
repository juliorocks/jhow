import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google"; // Using Outfit for headings as an option
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Jhow Agência | Arquitetura Estratégica de Marketing e IA",
  description: "Boutique estratégica de Arquitetura de Marketing, Comunicação e Sistemas Inteligentes com IA.",
  keywords: ["Agência de Marketing", "Inteligência Artificial", "IA", "Marketing Estratégico", "Sistemas Inteligentes"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${outfit.variable} dark`}>
      <body className="font-sans antialiased bg-background text-foreground selection:bg-primary/20 selection:text-primary">
        <Header />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
