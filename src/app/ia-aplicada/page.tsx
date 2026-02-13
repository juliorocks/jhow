import React from "react";
import Image from "next/image";
import { CheckCircle2, Bot, Newspaper } from "lucide-react";

export default function IAAppliedPage() {
    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section */}
            <section className="relative py-32 overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 bg-primary/20 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none" />
                <div className="container px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-medium mb-6 animate-pulse">
                        <Bot className="w-4 h-4" />
                        <span>Futuro da Comunicação</span>
                    </div>
                    <h1 className="text-4xl md:text-7xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                        Inteligência Artificial<br />Aplicada à Prática
                    </h1>
                    <p className="max-w-2xl mx-auto text-xl text-muted-foreground leading-relaxed">
                        Não usamos IA apenas para gerar textos. Integramos modelos de linguagem (LLMs) diretamente aos processos editoriais e de atendimento, criando fluxos autônomos e supervisionados.
                    </p>
                </div>
            </section>

            {/* Diagram Section */}
            <section className="py-24 bg-white/5">
                <div className="container px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Fluxo Editorial Automatizado</h2>
                            <p className="text-muted-foreground mb-8">
                                Um exemplo prático de como transformamos uma simples revista física em um portal digital dinâmico e automatizado.
                            </p>

                            <ul className="space-y-6">
                                <li className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold text-white shrink-0">1</div>
                                    <div>
                                        <h4 className="font-semibold text-white">Input (Origem)</h4>
                                        <p className="text-sm text-muted-foreground">PDFs de revistas, relatórios técnicos ou áudios de reuniões.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary shrink-0">2</div>
                                    <div>
                                        <h4 className="font-semibold text-white">Processamento (IA)</h4>
                                        <p className="text-sm text-muted-foreground">LLMs extraem tópicos, resumem, reescrevem para web e geram tags SEO.</p>
                                    </div>
                                </li>
                                <li className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold text-white shrink-0">3</div>
                                    <div>
                                        <h4 className="font-semibold text-white">Output (Destino)</h4>
                                        <p className="text-sm text-muted-foreground">Publicação agendada no CMS, newsletter disparada e posts sociais criados.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Diagram Visualization */}
                        <div className="relative aspect-square bg-black border border-white/10 rounded-2xl p-8 flex flex-col justify-between">
                            <div className="absolute inset-0 bg-grid-white/[0.05] pointer-events-none" />

                            {/* Visual Representation of Flow - Simplified */}
                            <div className="flex justify-center">
                                <div className="bg-white/10 p-4 rounded-lg text-center w-32">
                                    <Newspaper className="w-8 h-8 mx-auto mb-2 text-white/50" />
                                    <span className="text-xs font-mono">Revista PDF</span>
                                </div>
                            </div>

                            <div className="flex justify-center relative">
                                <div className="absolute h-16 w-[1px] bg-gradient-to-b from-white/10 to-primary -top-8" />
                                <div className="bg-primary/10 border border-primary/50 p-6 rounded-full relative z-10 shadow-[0_0_30px_-5px_var(--primary)]">
                                    <Bot className="w-10 h-10 text-primary animate-pulse" />
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-2 text-center">
                                <div className="bg-white/10 p-2 rounded text-[10px] font-mono border border-white/5">Portal News</div>
                                <div className="bg-white/10 p-2 rounded text-[10px] font-mono border border-white/5">LinkedIn</div>
                                <div className="bg-white/10 p-2 rounded text-[10px] font-mono border border-white/5">Newsletter</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Concepts Grid */}
            <section className="py-24">
                <div className="container px-6">
                    <h2 className="text-3xl font-bold mb-12 text-center">Nossa Abordagem Técnica</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-4">Governança</h3>
                            <p className="text-muted-foreground text-sm">
                                Estabelecemos diretrizes claras sobre onde e como a IA pode ser usada, garantindo segurança de dados e conformidade ética.
                            </p>
                        </div>
                        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-4">Automação Humana</h3>
                            <p className="text-muted-foreground text-sm">
                                A IA não substitui o especialista; ela o amplifica. Nossos sistemas mantêm o humano no loop para validação final (Human-in-the-loop).
                            </p>
                        </div>
                        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors">
                            <h3 className="text-xl font-bold text-white mb-4">Integração API</h3>
                            <p className="text-muted-foreground text-sm">
                                Conectamos OpenAI, Claude, Midjourney diretamente ao seu ERP ou CRM via APIs robustas e seguras.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
