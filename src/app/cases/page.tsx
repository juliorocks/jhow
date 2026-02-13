import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CasesPage() {
    const cases = [
        {
            id: 1,
            name: "NeoEnergy AI",
            category: "Sistemas Inteligentes",
            desc: "Implementação de assistente virtual para predição de consumo energético em indústrias.",
            year: "2024",
            image: "/placeholder-case-1.jpg" // User to replace
        },
        {
            id: 2,
            name: "Vanguarda Editorial",
            category: "Automação de Conteúdo",
            desc: "Transformação digital de uma revista impressa para um portal 100% automatizado via LLMs.",
            year: "2023",
            image: "/placeholder-case-2.jpg"
        },
        {
            id: 3,
            name: "Logística Alpha",
            category: "Arquitetura de Dados",
            desc: "Unificação de dados de 3 CRMs diferentes em um único dashboard de BI estratégico.",
            year: "2023",
            image: "/placeholder-case-3.jpg"
        }
    ];

    return (
        <div className="bg-background min-h-screen py-24">
            <div className="container px-6">
                <h1 className="text-4xl md:text-6xl font-black mb-16">Cases de Sucesso</h1>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cases.map((project) => (
                        <Link key={project.id} href={`/cases/${project.id}`} className="group relative block overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:border-primary/50 transition-all">
                            {/* Image Placeholder */}
                            <div className="aspect-video bg-zinc-800 relative flex items-center justify-center text-muted-foreground group-hover:scale-105 transition-transform duration-500">
                                <span className="text-xs font-mono border border-white/10 px-2 py-1 rounded bg-black/50 backdrop-blur-sm">
                                    [Imagem do Case: {project.name}]
                                </span>
                            </div>

                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded border border-primary/20">
                                        {project.category}
                                    </span>
                                    <span className="text-xs text-muted-foreground font-mono">{project.year}</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                                    {project.name}
                                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </h3>
                                <p className="text-muted-foreground text-sm line-clamp-3">
                                    {project.desc}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
