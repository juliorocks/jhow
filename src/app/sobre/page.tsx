import Image from "next/image";
import { CheckCircle2, Award, Users, TrendingUp } from "lucide-react";

export default function SobrePage() {
    return (
        <div className="bg-background">
            {/* Hero Section */}
            <section className="relative py-24 overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 bg-primary/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none" />
                <div className="container px-6 relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                            Mais de duas décadas de<br />Arquitetura Estratégica.
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            A Jhow Agência nasceu da visão de que o marketing moderno não é apenas sobre criatividade, mas sobre estrutura, dados e inteligência de sistemas.
                        </p>
                    </div>
                </div>
            </section>

            {/* Founder Story Section */}
            <section className="py-24">
                <div className="container px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted border border-white/10 group">
                        {/* Placeholder for Founder Image */}
                        <div className="absolute inset-0 flex items-center justify-center bg-zinc-900 text-muted-foreground">
                            <span className="text-sm">[Foto Julio César]</span>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold">Julio César</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Com mais de 20 anos de experiência no mercado de comunicação e tecnologia, Julio César construiu sua carreira liderando equipes multidisciplinares e gerenciando contas de todos os portes — de startups promissoras a grandes corporações.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            Sua formação acadêmica sólida, combinada com uma obsessão por métricas e resultados, moldou a metodologia proprietária da Jhow Agência: uma fusão entre a arquitetura de sistemas robustos e a fluidez da comunicação estratégica.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                                <Award className="w-6 h-6 text-primary mt-1" />
                                <div>
                                    <h4 className="font-semibold text-white">Experiência Sênior</h4>
                                    <p className="text-sm text-muted-foreground">20+ anos de mercado</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                                <Users className="w-6 h-6 text-primary mt-1" />
                                <div>
                                    <h4 className="font-semibold text-white">Liderança</h4>
                                    <p className="text-sm text-muted-foreground">Gestão de equipes de alta performance</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline Section (Simplified) */}
            <section className="py-24 bg-black/50 border-t border-white/5">
                <div className="container px-6">
                    <h2 className="text-3xl font-bold mb-16 text-center">Trajetória</h2>
                    <div className="space-y-12 max-w-4xl mx-auto border-l-2 border-white/10 pl-8 ml-4 md:ml-0">
                        <div className="relative">
                            <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-primary border-4 border-background" />
                            <h3 className="text-xl font-bold text-white">Fundação da Jhow Agência</h3>
                            <p className="text-primary text-sm font-mono mb-2">202X - Presente</p>
                            <p className="text-muted-foreground">Estabelecimento de uma boutique estratégica focada em IA e dados.</p>
                        </div>
                        <div className="relative">
                            <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-zinc-700 border-4 border-background" />
                            <h3 className="text-xl font-bold text-white">Gestão de Grandes Contas</h3>
                            <p className="text-gray-500 text-sm font-mono mb-2">2010 - 202X</p>
                            <p className="text-muted-foreground">Liderança de projetos complexos para empresas nacionais.</p>
                        </div>
                        <div className="relative">
                            <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-zinc-700 border-4 border-background" />
                            <h3 className="text-xl font-bold text-white">Início da Carreira</h3>
                            <p className="text-gray-500 text-sm font-mono mb-2">200X</p>
                            <p className="text-muted-foreground">Primeiros passos no desenvolvimento web e design estratégico.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
