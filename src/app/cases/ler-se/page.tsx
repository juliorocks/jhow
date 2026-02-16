"use client";

import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, MonitorPlay, ExternalLink, Activity, Trophy, ShieldCheck, BarChart3, Users, MessageSquare, BookOpen, ShoppingCart, HelpCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function LerSeCase() {
    return (
        <div className="bg-background min-h-screen text-foreground selection:bg-primary/30">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background pointer-events-none" />

                <div className="container px-6 relative z-10 pt-20">
                    <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-white transition-colors mb-8 group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Voltar para Home
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto text-center space-y-8"
                    >
                        <span className="px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary text-xs font-mono uppercase tracking-wider">
                            Plataforma de Assinatura
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
                            Clube Ler-se
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                            Um ecossistema completo criado para o Clube de Leitura Ler-Se.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4 pt-4">
                            <a
                                href="https://lerse.com.br"
                                target="_blank"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-neutral-200 transition-colors"
                            >
                                <MonitorPlay className="w-4 h-4" />
                                Ver Projeto Ao Vivo
                            </a>
                        </div>
                    </motion.div>

                    {/* Hero Image/Mockup Showcase */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-16 md:mt-24 relative max-w-6xl mx-auto"
                    >
                        <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900/50 backdrop-blur-sm group">
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
                            <Image
                                src="https://s0.wp.com/mshots/v1/https://lerse.com.br?w=1200"
                                alt="Ler-se Platform Preview"
                                fill
                                className="object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Overview & Challenge Grid */}
            <section className="py-24 border-b border-white/5">
                <div className="container px-6">
                    <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h2 className="text-3xl font-bold">Visão Geral</h2>
                            <p className="text-muted-foreground leading-relaxed text-lg">
                                O Clube Ler-se é uma plataforma digital exclusiva voltada para a educação cristã clássica, literatura e cultura. Funciona como um ecossistema completo de aprendizado (LMS) e comunidade, oferecendo aos seus membros acesso a planos de leitura, aulas semanais, podcasts exclusivos e ferramentas de estudo.
                            </p>
                            <p className="text-muted-foreground leading-relaxed text-lg">
                                <strong>Objetivo:</strong> Criar uma experiência "premium" de aprendizado, centralizando todo o conteúdo em uma aplicação web moderna, rápida e responsiva, com controle total sobre a gestão de assinaturas e engajamento dos alunos.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h2 className="text-3xl font-bold">O Desafio</h2>
                            <ul className="space-y-4">
                                <ListItem title="Gestão de Assinaturas">
                                    Integração completa com gateway (Asaas) para recorrência via Pix e Cartão.
                                </ListItem>
                                <ListItem title="Experiência do Usuário (UX)">
                                    Identidade visual imersiva, fugindo do padrão genérico de plataformas de curso.
                                </ListItem>
                                <ListItem title="Centralização Administrativa">
                                    Painel robusto para substituir planilhas e unificar gestão de alunos e financeiro.
                                </ListItem>
                                <ListItem title="Gamificação e Retenção">
                                    Sistemas de engajamento para manter a comunidade ativa e participativa.
                                </ListItem>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Solution & Features */}
            <section className="py-24 bg-zinc-900/30">
                <div className="container px-6">
                    <div className="mb-16 md:text-center max-w-3xl mx-auto">
                        <span className="text-primary font-mono text-sm uppercase tracking-wider">A Solução</span>
                        <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6">Arquitetura de Alta Performance</h2>
                        <p className="text-muted-foreground text-lg">
                            Desenvolvemos uma Single Page Application (SPA) utilizando React e Supabase, garantindo escalabilidade infinita e uma experiência de uso fluida.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <FeatureCard
                            icon={<ShoppingCart className="w-6 h-6 text-primary" />}
                            title="Carrinho Abandonado"
                            desc="Recuperação automática de vendas perdidas integrado ao checkout."
                        />
                        <FeatureCard
                            icon={<BookOpen className="w-6 h-6 text-primary" />}
                            title="Gerenciador de Livros"
                            desc="Organização completa do acervo e cronogramas de leitura."
                        />
                        <FeatureCard
                            icon={<Users className="w-6 h-6 text-primary" />}
                            title="Comunidade Própria"
                            desc="Fórum interno exclusivo para discussões ricas e networking."
                        />
                        <FeatureCard
                            icon={<BarChart3 className="w-6 h-6 text-primary" />}
                            title="Enquetes"
                            desc="Ferramenta interativa para decidir próximas leituras e temas."
                        />
                        <FeatureCard
                            icon={<Activity className="w-6 h-6 text-primary" />}
                            title="Sistema de Avaliação"
                            desc="Feedback constante sobre aulas e materiais didáticos."
                        />
                        <FeatureCard
                            icon={<Trophy className="w-6 h-6 text-primary" />}
                            title="Gamificação"
                            desc="Badges, níveis e recompensas por engajamento na plataforma."
                        />
                        <FeatureCard
                            icon={<HelpCircle className="w-6 h-6 text-primary" />}
                            title="Área de Suporte"
                            desc="Sistema de tickets integrado para atendimento rápido ao aluno."
                        />
                        <FeatureCard
                            icon={<ShieldCheck className="w-6 h-6 text-primary" />}
                            title="Privacidade LGPD"
                            desc="Conformidade total com proteção de dados e segurança do usuário."
                        />
                    </div>
                </div>
            </section>

            {/* UI Gallery Section */}
            <section className="py-24 border-t border-white/5 bg-black/20">
                <div className="container px-6">
                    <h2 className="text-3xl font-bold mb-16 text-center">Por Dentro da Plataforma</h2>

                    <div className="space-y-24">
                        {/* Screenshot 1: Dashboard */}
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="order-2 md:order-1"
                            >
                                <h3 className="text-2xl font-bold mb-4">Dashboard do Aluno</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Uma visão centralizada de todas as atividades, com destaque para o <strong>Livro do Mês</strong>, calendário de aulas ao vivo e acesso rápido aos conteúdos mais recentes. O design foca na clareza e na imersão desde o primeiro acesso.
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="order-1 md:order-2 relative rounded-xl overflow-hidden border border-white/10 shadow-2xl group"
                            >
                                <div className="absolute top-0 left-0 right-0 h-6 bg-zinc-900 border-b border-white/5 flex items-center px-4 gap-2">
                                    <div className="w-2 h-2 rounded-full bg-red-500/50" />
                                    <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                                    <div className="w-2 h-2 rounded-full bg-green-500/50" />
                                </div>
                                <div className="pt-6 bg-zinc-900">
                                    <img src="https://placehold.co/1200x800/151515/FFFFFF/png?text=Dashboard+Preview" alt="Dashboard Ler-se" className="w-full h-auto opacity-90 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </motion.div>
                        </div>

                        {/* Screenshot 2: Class Player */}
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl group"
                            >
                                <div className="absolute top-0 left-0 right-0 h-6 bg-zinc-900 border-b border-white/5 flex items-center px-4 gap-2">
                                    <div className="w-2 h-2 rounded-full bg-red-500/50" />
                                    <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                                    <div className="w-2 h-2 rounded-full bg-green-500/50" />
                                </div>
                                <div className="pt-6 bg-zinc-900">
                                    <img src="https://placehold.co/1200x800/151515/FFFFFF/png?text=Player+Preview" alt="Player de Aula Ler-se" className="w-full h-auto opacity-90 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-2xl font-bold mb-4">Sala de Aula Imersiva</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Experiência de aprendizado sem distrações. O player integra vídeo, <strong>podcast</strong> (para ouvir em movimento), bloco de notas pessoal e materiais de apoio em uma única interface coesa.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="py-24 border-t border-white/5">
                <div className="container px-6 text-center">
                    <h2 className="text-3xl font-bold mb-12">Stack Tecnológico</h2>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-80">
                        {/* Tech logos placeholders - utilizing text for simplicity matching style */}
                        <TechItem name="React 18" />
                        <TechItem name="Vite" />
                        <TechItem name="TypeScript" />
                        <TechItem name="Tailwind CSS" />
                        <TechItem name="Supabase" />
                        <TechItem name="Asaas API" />
                        <TechItem name="React Query" />
                    </div>
                </div>
            </section>

            {/* Results CTA */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/10 opacity-20 pointer-events-none"></div>
                <div className="container px-6 text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-black mb-6">Resultado</h2>
                    <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                        "A plataforma entrega uma experiência fluida e proprietária, reforçando a marca Ler-se como autoridade. A automação reduziu drasticamente a carga operacional."
                    </p>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-primary hover:underline underline-offset-4"
                    >
                        Ver outros cases <ArrowLeft className="w-4 h-4 rotate-180" />
                    </Link>
                </div>
            </section>
        </div>
    );
}

function ListItem({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <div className="flex gap-4 items-start">
            <div className="mt-1 bg-primary/20 p-1 rounded-full">
                <CheckCircle2 className="w-4 h-4 text-primary" />
            </div>
            <div>
                <h4 className="font-semibold text-white">{title}</h4>
                <p className="text-muted-foreground text-sm">{children}</p>
            </div>
        </div>
    );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
    return (
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-colors">
            <div className="mb-4 bg-background w-12 h-12 flex items-center justify-center rounded-xl border border-white/10">
                {icon}
            </div>
            <h3 className="text-lg font-bold mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground">{desc}</p>
        </div>
    );
}

function TechItem({ name }: { name: string }) {
    return (
        <span className="text-xl font-semibold text-muted-foreground hover:text-white transition-colors cursor-default">
            {name}
        </span>
    );
}
