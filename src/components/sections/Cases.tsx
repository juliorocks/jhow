"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";


const cases = [
    {
        client: "TechFlow Systems",
        category: "Arquitetura de Dados",
        description: "Reestruturação completa do ecossistema de marketing com pipelines de dados em tempo real.",
        image: "/api/placeholder/400/300",
    },
    {
        client: "Grupo Vanguarda",
        category: "Automação Editorial",
        description: "Implementação de IA para geração de conteúdo técnico em escala massiva.",
        image: "/api/placeholder/400/300",
    },
    {
        client: "NeoBank Digital",
        category: "Sistema Inteligente",
        description: "Bot de atendimento avançado treinado com LLMs proprietários e RAG.",
        image: "/api/placeholder/400/300",
    }
];

export function Cases({ className }: { className?: string }) {
    return (
        <section className={`py-24 bg-background ${className}`}>
            <div className="container px-6">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Cases Selecionados</h2>
                        <p className="text-muted-foreground">Onde a teoria encontra a aplicação real.</p>
                    </div>
                    <Link href="/cases" className="hidden md:flex items-center gap-2 text-primary hover:underline">
                        Ver todos os cases <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cases.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <div className="relative aspect-video rounded-xl overflow-hidden mb-4 bg-muted border border-white/10 group-hover:border-primary/50 transition-colors">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground opacity-50">
                                    {/* Placeholder for Image */}
                                    <span className="text-xs">[Imagem do Projeto]</span>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <span className="text-xs font-mono text-primary">{project.category}</span>
                                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors flex items-center gap-2">
                                    {project.client}
                                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </h3>
                                <p className="text-sm text-muted-foreground line-clamp-2">
                                    {project.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Link href="/cases" className="text-primary font-medium hover:underline inline-flex items-center gap-2">
                        Ver todos os cases <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
