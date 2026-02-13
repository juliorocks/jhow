"use client";

import { motion } from "framer-motion";
import { CheckCircle2, CircleDashed, ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
    {
        title: "Diagnóstico Estratégico",
        description: "Análise profunda do cenário atual, mercado e objetivos da organização.",
    },
    {
        title: "Arquitetura da Solução",
        description: "Desenho técnico do ecossistema, definindo ferramentas e fluxos de dados.",
    },
    {
        title: "Desenvolvimento e Integração",
        description: "Construção das interfaces e conexão das inteligências artificiais.",
    },
    {
        title: "Implantação e Treinamento",
        description: "Go-live assistido e capacitação da equipe para operar o novo sistema.",
    },
    {
        title: "Otimização Contínua",
        description: "Monitoramento de performance e ajustes baseados em dados reais.",
    },
];

export function Methodology() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-primary font-medium tracking-wider text-sm uppercase">Processo Exclusivo</span>
                    <h2 className="text-3xl md:text-5xl font-bold mt-2">
                        JHOW Framework™
                    </h2>
                    <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                        Metodologia proprietária para desenvolvimento de soluções estratégicas com IA.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.2 }}
                            className="relative pl-12 pb-12 last:pb-0 group"
                        >
                            {/* Connecting Line */}
                            {index !== steps.length - 1 && (
                                <div className="absolute left-[11px] top-8 bottom-0 w-[2px] bg-white/10 group-hover:bg-primary/50 transition-colors" />
                            )}

                            {/* Node Point */}
                            <div className="absolute left-0 top-1 w-6 h-6 rounded-full border-2 border-primary bg-background flex items-center justify-center z-10 group-hover:scale-110 transition-transform">
                                <div className="w-2 h-2 rounded-full bg-primary" />
                            </div>

                            <div className="space-y-2">
                                <h3 className="text-xl font-semibold text-white group-hover:text-primary transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-muted-foreground">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
