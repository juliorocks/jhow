import React from "react";
import Image from "next/image";
import { BrainCircuit, Database, FileText, Layers } from "lucide-react";

export default function SolucoesPage() {
    const sections = [
        {
            icon: Layers,
            title: "Arquitetura Estratégica",
            desc: "O alicerce do crescimento.",
            content: "Desenvolvemos o blueprint completo do ecossistema de marketing da sua empresa. Mapeamos jornadas, definimos canais e estruturamos a comunicação para garantir que cada peça do sistema trabalhe em sintonia, maximizando o ROI.",
            features: ["Mapeamento de Jornada", "Planejamento Multicanal", "Auditoria de Ecossistema"],
            image: "/images/solucoes/arquitetura.svg"
        },
        {
            icon: BrainCircuit,
            title: "Sistemas Inteligentes com IA",
            desc: "Automação e personalização em escala.",
            content: "Implementamos agentes de IA, chatbots avançados e sistemas preditivos que aprendem com o comportamento do seu cliente. Transformamos dados brutos em ações automáticas que geram receita 24/7.",
            features: ["Chatbots Cognitivos", "Personalização Dinâmica", "Análise Preditiva"],
            image: "/images/solucoes/ia.svg"
        },
        {
            icon: FileText,
            title: "Projetos Editoriais Estruturados",
            desc: "Conteúdo com autoridade técnica.",
            content: "Não fazemos apenas posts para redes sociais. Criamos estruturas editoriais robustas — de portais de conteúdo a whitepapers técnicos — que posicionam sua marca como líder de pensamento no setor.",
            features: ["Portais de Conteúdo", "Whitepapers & E-books", "Estratégia SEO Técnica"],
            image: "/images/solucoes/editorial.svg"
        },
        {
            icon: Database,
            title: "Marketing Orientado a Dados",
            desc: "Decisões baseadas em evidências.",
            content: "Implementamos dashboards em tempo real e cultura de testes A/B. Eliminamos o 'achismo' da mesa de decisão, fornecendo inteligência acionável para toda a diretoria.",
            features: ["Dashboards BI", "Cultura de Testes A/B", "Atribuição Multi-touch"],
            image: "/images/solucoes/dados.svg"
        }
    ];

    return (
        <div className="bg-background min-h-screen py-24">
            {/* Header */}
            <div className="container px-6 mb-24 text-center">
                <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-600">
                    Soluções Integradas
                </h1>
                <p className="max-w-2xl mx-auto text-xl text-muted-foreground">
                    Tecnologia e estratégia trabalhando em uníssono para escalar sua operação.
                </p>
            </div>

            {/* Solutions Grid */}
            <div className="container px-6 space-y-32">
                {sections.map((sol, idx) => (
                    <div key={idx} className={`flex flex-col md:flex-row gap-12 items-center ${idx % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>

                        <div className="flex-1 space-y-6">
                            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20">
                                <sol.icon className="w-8 h-8 text-primary" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white">{sol.title}</h2>
                            <p className="text-lg font-medium text-primary">{sol.desc}</p>
                            <p className="text-muted-foreground leading-relaxed text-lg">
                                {sol.content}
                            </p>

                            <ul className="space-y-3 pt-4">
                                {sol.features.map((feat, fidx) => (
                                    <li key={fidx} className="flex items-center gap-3 text-sm font-semibold text-white/80">
                                        <span className="w-2 h-2 rounded-full bg-primary" />
                                        {feat}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex-1 w-full relative aspect-square md:aspect-video rounded-3xl overflow-hidden bg-gradient-to-br from-white/5 to-white/0 border border-white/10 p-1 group">
                            <div className="absolute inset-0 bg-grid-white/[0.05] z-10" />
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src={sol.image}
                                    alt={sol.title}
                                    fill
                                    className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500 hover:scale-105 transform"
                                />
                            </div>
                            {/* Overlay gradient for better text readability if needed, though images are dark */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}
