import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Methodology } from "@/components/sections/Methodology";

import Link from "next/link";
import { Calendar } from "lucide-react";
import { StrategyFlow } from "@/components/ui/StrategyFlow";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Positioning / Value Proposition Section */}
      <section className="py-24 bg-background border-y border-white/5">
        <div className="container px-6 text-center max-w-4xl mx-auto space-y-8">
          <h2 className="text-2xl md:text-3xl font-light text-muted-foreground leading-relaxed">
            A Jhow não é uma agência tradicional. Somos uma <span className="text-white font-semibold">boutique de arquitetura estratégica</span> especializada na construção de ecossistemas de marketing e comunicação integrados com Inteligência Artificial, dados e tecnologia.
          </h2>
          <StrategyFlow />
        </div>
      </section>

      {/* Main Sections */}
      <Features />
      <Methodology />

      {/* Final CTA Section */}
      <section className="py-32 bg-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
        <div className="container px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
            Inovação não é ferramenta.<br />
            É estrutura.
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Agende uma reunião estratégica para entendermos como arquitetar o próximo nível do seu negócio.
          </p>
          <Link
            href="https://wa.me/5512996836409?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20reuni%C3%A3o%20estrat%C3%A9gica."
            target="_blank"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-bold text-lg rounded-full hover:shadow-[0_0_40px_-10px_var(--primary)] hover:scale-105 transition-all group"
          >
            <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Agendar Reunião Estratégica
          </Link>
        </div>
      </section>
    </div>
  );
}
