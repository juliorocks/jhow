"use client";

import { motion } from "framer-motion";
import { ArrowRight, BrainCircuit } from "lucide-react";
import Link from "next/link";


export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-700/20 via-background to-background">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-background via-background to-primary/5 opacity-50" />

            <div className="container relative z-10 px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl mx-auto space-y-8"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
                        <BrainCircuit className="w-4 h-4" />
                        <span>Inteligência Artificial Aplicada</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 pb-4">
                        Arquitetamos ecossistemas de <br />
                        Marketing e Comunicação com Inteligência Artificial
                    </h1>

                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Desenvolvemos sistemas inteligentes, estruturas personalizadas e ecossistemas de comunicação para organizações que buscam inovação real, escalável e sustentável.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                        <Link
                            href="https://wa.me/5512996836409?text=Ol%C3%A1%2C%20gostaria%20de%20um%20diagn%C3%B3stico%20estrat%C3%A9gico%20para%20minha%20empresa."
                            target="_blank"
                            className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:brightness-110 transition-all w-full sm:w-auto flex items-center justify-center gap-2 group"
                        >
                            Falar com Especialista
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link href="/metodologia" className="px-8 py-4 bg-white/5 border border-white/10 text-white font-semibold rounded-lg hover:bg-white/10 transition-all w-full sm:w-auto">
                            Conheça nossa abordagem
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Grid or Particles could go here */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        </section>
    );
}
