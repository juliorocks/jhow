import Link from "next/link";
import { cn } from "@/lib/utils";

// Make sure to implement Logo component or just text
// Make sure to implement MobileMenu
import { Menu } from "lucide-react";

import Image from "next/image";

export function Header() {
    return (
        <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="relative flex items-center gap-2">
                    <div className="relative w-32 h-10">
                        <Image
                            src="/logo-white.png"
                            alt="JHOW Agência"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>
                </Link>
                <nav className="hidden md:flex gap-8 items-center text-sm font-medium text-muted-foreground">
                    <Link href="/solucoes" className="hover:text-primary transition-colors">Soluções</Link>
                    <Link href="/metodologia" className="hover:text-primary transition-colors">Metodologia</Link>
                </nav>
                <div className="hidden md:flex items-center gap-4">
                    <Link
                        href="https://wa.me/5512996836409?text=Ol%C3%A1%2C%20gostaria%20de%20um%20diagn%C3%B3stico%20estrat%C3%A9gico%20para%20minha%20empresa."
                        target="_blank"
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
