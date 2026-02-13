"use client";

import { useState } from "react";
import { Send, CheckCircle2, ArrowRight } from "lucide-react";

export default function ContatoPage() {
    const [formData, setFormData] = useState({
        nome: "",
        empresa: "",
        cargo: "",
        email: "",
        desafio: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));

        setIsSubmitting(false);
        setIsSuccess(true);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="bg-background min-h-screen py-24 flex items-center justify-center">
            <div className="container px-6 max-w-4xl grid md:grid-cols-2 gap-16 items-start">

                {/* Left Side: Contact Info */}
                <div className="space-y-8">
                    <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">Vamos Conversar?</h1>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Estamos prontos para entender seu desafio tecnológico e de comunicação. Preencha o formulário para agendarmos um diagnóstico inicial.
                    </p>

                    <div className="space-y-4 pt-8 border-t border-white/10">
                        <a href="mailto:contato@jhow.agency" className="flex items-center gap-3 text-lg font-medium hover:text-primary transition-colors group">
                            <span className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                @
                            </span>
                            contato@jhow.agency
                        </a>
                        <a href="https://linkedin.com" target="_blank" className="flex items-center gap-3 text-lg font-medium hover:text-primary transition-colors group">
                            <span className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                in
                            </span>
                            LinkedIn Jhow Agência
                        </a>
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="bg-white/5 p-8 rounded-2xl border border-white/10 relative overflow-hidden">
                    {isSuccess ? (
                        <div className="absolute inset-0 bg-background/95 backdrop-blur-sm z-20 flex flex-col items-center justify-center text-center p-8 animate-in fade-in zoom-in duration-500">
                            <div className="w-16 h-16 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mb-6">
                                <CheckCircle2 className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2 text-white">Mensagem Enviada!</h3>
                            <p className="text-muted-foreground mb-6">Recebemos seu contato e retornaremos em até 24h úteis.</p>
                            <button
                                onClick={() => setIsSuccess(false)}
                                className="text-sm text-primary hover:underline underline-offset-4"
                            >
                                Enviar novo diagnóstico
                            </button>
                        </div>
                    ) : null}

                    <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="nome" className="text-sm font-medium text-muted-foreground">Nome Completo</label>
                                <input
                                    required
                                    type="text"
                                    id="nome"
                                    name="nome"
                                    value={formData.nome}
                                    onChange={handleChange}
                                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                                    placeholder="Seu nome"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="empresa" className="text-sm font-medium text-muted-foreground">Empresa</label>
                                <input
                                    required
                                    type="text"
                                    id="empresa"
                                    name="empresa"
                                    value={formData.empresa}
                                    onChange={handleChange}
                                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                                    placeholder="Nome da empresa"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-muted-foreground">Email Corporativo</label>
                                <input
                                    required
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                                    placeholder="seu@email.com"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="cargo" className="text-sm font-medium text-muted-foreground">Cargo</label>
                                <input
                                    type="text"
                                    id="cargo"
                                    name="cargo"
                                    value={formData.cargo}
                                    onChange={handleChange}
                                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                                    placeholder="Ex: CTO"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="desafio" className="text-sm font-medium text-muted-foreground">Qual seu maior desafio hoje?</label>
                            <textarea
                                required
                                id="desafio"
                                name="desafio"
                                value={formData.desafio}
                                onChange={handleChange}
                                rows={4}
                                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none"
                                placeholder="Descreva brevemente o que precisa resolver..."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? (
                                "Enviando..."
                            ) : (
                                <>
                                    Solicitar Diagnóstico
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
