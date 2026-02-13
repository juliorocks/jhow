import Link from "next/link";
import { Linkedin, Instagram, ArrowRight } from "lucide-react";

export function Footer() {
    return (
        <footer className="w-full bg-black py-16 text-muted-foreground border-t border-white/5">
            <div className="container px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="space-y-4">
                    <Link href="/" className="text-3xl font-bold tracking-tighter text-white">
                        JHOW<span className="text-primary">.AGENCY</span>
                    </Link>
                    <p className="max-w-xs text-sm">
                        Boutique Estratégica de Arquitetura de Marketing e Sistemas Inteligentes com IA.
                    </p>
                    <div className="flex gap-4 pt-2">
                        <Link href="https://linkedin.com" target="_blank" className="hover:text-primary transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </Link>
                        <Link href="https://instagram.com" target="_blank" className="hover:text-primary transition-colors">
                            <Instagram className="w-5 h-5" />
                        </Link>
                    </div>
                </div>

                <div className="space-y-4">
                    <h4 className="text-white font-semibold">Soluções</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/solucoes" className="hover:text-primary transition-colors">Arquitetura Estratégica</Link></li>
                        <li><Link href="/solucoes" className="hover:text-primary transition-colors">Sistemas com IA</Link></li>
                        <li><Link href="/solucoes" className="hover:text-primary transition-colors">Automação Editorial</Link></li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h4 className="text-white font-semibold">Empresa</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/sobre" className="hover:text-primary transition-colors">Sobre Nós</Link></li>
                        <li><Link href="/metodologia" className="hover:text-primary transition-colors">Metodologia</Link></li>
                        <li><Link href="/cases" className="hover:text-primary transition-colors">Cases</Link></li>
                        <li><Link href="/contato" className="hover:text-primary transition-colors">Contato</Link></li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h4 className="text-white font-semibold">Newsletter</h4>
                    <div className="flex gap-2">
                        <input
                            type="email"
                            placeholder="Seu email corporativo"
                            className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary w-full"
                        />
                        <button className="bg-primary text-primary-foreground p-2 rounded-lg hover:brightness-110 transition-all">
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="container px-6 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs">
                <p>&copy; {new Date().getFullYear()} Jhow Agência. Todos os direitos reservados.</p>
                <div className="flex gap-8 mt-4 md:mt-0">
                    <Link href="/termos" className="hover:text-white transition-colors">Termos de Uso</Link>
                    <Link href="/privacidade" className="hover:text-white transition-colors">Privacidade</Link>
                </div>
            </div>
        </footer>
    );
}
