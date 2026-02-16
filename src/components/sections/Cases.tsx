"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, ExternalLink, Globe } from "lucide-react";
import Link from "next/link";
import { Loader2 } from "lucide-react";

interface Case {
    client: string;
    category: string;
    description: string;
    image: string;
    url: string;
}

const cases: Case[] = [
    {
        client: "Ler-se",
        category: "Plataforma de Assinatura",
        description: "Clube de leitura exclusivo com sistema de assinatura, gestão de membros e conteúdo premium.",
        image: "https://image.thum.io/get/width/1200/crop/675/https://lerse.com.br",
        url: "https://lerse.com.br",
    },
    {
        client: "TechFlow Systems",
        category: "Arquitetura de Dados",
        description: "Reestruturação completa do ecossistema de marketing com pipelines de dados em tempo real.",
        image: "/api/placeholder/400/300",
        url: "#",
    },
    {
        client: "Grupo Vanguarda",
        category: "Automação Editorial",
        description: "Implementação de IA para geração de conteúdo técnico em escala massiva.",
        image: "/api/placeholder/400/300",
        url: "#",
    },
];

export function Cases({ className }: { className?: string }) {
    const [selectedCase, setSelectedCase] = useState<Case | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const handleOpenCase = (project: Case) => {
        if (project.url && project.url !== "#") {
            setSelectedCase(project);
            setIsLoading(true);
        }
    };

    return (
        <section className={`py-24 bg-background ${className}`}>
            <div className="container px-6">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Cases Selecionados</h2>
                        <p className="text-muted-foreground">Onde a teoria encontra a aplicação real.</p>
                    </div>
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
                            onClick={() => handleOpenCase(project)}
                        >
                            <div className="relative aspect-video rounded-xl overflow-hidden mb-4 bg-muted border border-white/10 group-hover:border-primary/50 transition-colors">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                                {project.image && !project.image.includes("placeholder") ? (
                                    // Using a simple img tag here for simplicity, or Next.js Image if we had dimensions. 
                                    // Since we don't know if the user has domains configured for external images, standard img is safer for external URLs unless configured.
                                    <img src={project.image} alt={project.client} className="absolute inset-0 w-full h-full object-cover -z-10 group-hover:scale-105 transition-transform duration-500" />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center text-muted-foreground opacity-50 bg-neutral-900">
                                        <span className="text-xs">[Imagem do Projeto]</span>
                                    </div>
                                )}
                            </div>

                            <div className="space-y-2">
                                <span className="text-xs font-mono text-primary">{project.category}</span>
                                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors flex items-center gap-2">
                                    {project.client}
                                    {project.url && project.url !== '#' && <Globe className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />}
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

            <AnimatePresence>
                {selectedCase && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-md"
                        onClick={() => setSelectedCase(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            className="bg-background w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-card/50 backdrop-blur">
                                <div className="flex items-center gap-3">
                                    <h3 className="font-semibold text-lg">{selectedCase.client}</h3>
                                    <Link
                                        href={selectedCase.url}
                                        target="_blank"
                                        className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors flex items-center gap-1"
                                    >
                                        {selectedCase.url} <ExternalLink className="w-3 h-3" />
                                    </Link>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => setIsLoading(true)} // Reload iframe trick (doesn't work directly but we can pretend or add reload logic) - actually just closing
                                        className="p-2 hover:bg-white/5 rounded-full text-muted-foreground hover:text-white transition-colors"
                                        title="Recarregar"
                                        onClickCapture={() => {
                                            const iframe = document.getElementById('project-iframe') as HTMLIFrameElement;
                                            if (iframe) iframe.src = iframe.src;
                                            setIsLoading(true);
                                        }}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" /><path d="M21 3v5h-5" /><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" /><path d="M3 21v-5h5" /></svg>
                                    </button>
                                    <button
                                        onClick={() => setSelectedCase(null)}
                                        className="p-2 hover:bg-white/10 rounded-full text-white transition-colors"
                                    >
                                        <X className="w-6 h-6" />
                                    </button>
                                </div>
                            </div>

                            <div className="flex-1 relative bg-white w-full h-full">
                                {isLoading && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur z-10">
                                        <Loader2 className="w-10 h-10 animate-spin text-primary" />
                                    </div>
                                )}
                                <iframe
                                    id="project-iframe"
                                    src={selectedCase.url}
                                    className="w-full h-full border-0"
                                    title={selectedCase.client}
                                    onLoad={() => setIsLoading(false)}
                                    allowFullScreen
                                    sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-modals allow-presentation"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
