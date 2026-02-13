import Link from "next/link";
import { cn } from "@/lib/utils";

// Make sure to implement Logo component or just text
// Make sure to implement MobileMenu
import { Menu } from "lucide-react";

export function Header() {
    return (
        <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold tracking-tighter">
                    JHOW<span className="text-primary">.AGENCY</span>
                </Link>
                <nav className="hidden md:flex gap-8 items-center text-sm font-medium text-muted-foreground">
                    <Link href="/sobre" className="hover:text-primary transition-colors">Sobre</Link>
                    <Link href="/solucoes" className="hover:text-primary transition-colors">Soluções</Link>
                    <Link href="/metodologia" className="hover:text-primary transition-colors">Metodologia</Link>
                    <Link href="/cases" className="hover:text-primary transition-colors">Cases</Link>
                    <Link href="/ia-aplicada" className="hover:text-primary transition-colors">IA Aplicada</Link>
                </nav>
                <div className="hidden md:flex items-center gap-4">
                    <Link
                        href="/contato"
                        className="px-5 py-2.5 bg-primary text-primary-foreground font-semibold rounded-full hover:shadow-[0_0_20px_-5px_var(--primary)] transition-all"
                    >
                        Diagnóstico
                    </Link>
                </div>
                <button className="md:hidden text-foreground">
                    <Menu className="w-8 h-8" />
                </button>
            </div>
        </header>
    );
}
