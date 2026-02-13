"use client";

import { motion } from "framer-motion";
import {
    Network,
    Cpu,
    FileText,
    BarChart3
} from "lucide-react";

const features = [
    {
        icon: Network,
        title: "Arquitetura Estratégica",
        description: "Planejamento estrutural de ecossistemas digitais que integram todas as frentes da comunicação.",
    },
    {
        icon: Cpu,
        title: "Sistemas Inteligentes com IA",
        description: "Automação avançada e personalização em escala utilizando os modelos mais atuais de Inteligência Artificial.",
    },
    {
        icon: FileText,
        title: "Projetos Editoriais Estruturados",
        description: "Criação de autoridade através de conteúdo denso, técnico e estrategicamente distribuído.",
    },
    {
        icon: BarChart3,
        title: "Marketing Orientado a Dados",
        description: "Decisões baseadas em métricas reais e projeções de performance, não em achismos.",
    },
];

export function Features() {
    return (
        <section className="py-24 bg-black/50">
            <div className="container px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-4">
                        Nossos Pilares
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Uma abordagem integrada que une tecnologia de ponta e estratégia de alto nível.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-colors group"
                        >
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                <feature.icon className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                            <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
