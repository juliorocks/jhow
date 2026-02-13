import { CheckCircle2 } from "lucide-react";

export default function MetodologiaPage() {
    const steps = [
        {
            num: "01",
            title: "Diagnóstico Estratégico",
            desc: "Imersão total no negócio. Avaliamos maturidade tecnológica, gaps de comunicação e oportunidades de dados."
        },
        {
            num: "02",
            title: "Arquitetura da Solução",
            desc: "Desenhamos o blueprint completo: fluxo de dados, integrações necessárias, canais a ativar e tecnologias a contratar."
        },
        {
            num: "03",
            title: "Desenvolvimento e Integração",
            desc: "Fase mão na massa de código e configuração. Conexão de APIs, treinamento de modelos de IA e criação de assets visuais."
        },
        {
            num: "04",
            title: "Implantação e Treinamento",
            desc: "Go-live assistido. Mas não entregamos apenas a chave; treinamos sua equipe para operar a máquina."
        },
        {
            num: "05",
            title: "Otimização Contínua",
            desc: "Monitoramento constante de KPIs. O sistema nunca está pronto; ele evolui com novos dados."
        }
    ];

    return (
        <div className="bg-background min-h-screen">
            <section className="py-24 text-center container px-6">
                <h1 className="text-4xl md:text-6xl font-black mb-6">O JHOW Framework™</h1>
                <p className="max-w-xl mx-auto text-muted-foreground text-lg mb-16">
                    Uma metodologia linear, previsível e escalável para transformar caos em sistema.
                </p>

                <div className="relative max-w-4xl mx-auto space-y-12">
                    {/* Vertical Line */}
                    <div className="absolute left-[27px] md:left-1/2 top-4 bottom-4 w-[2px] bg-white/10 -ml-[1px]" />

                    {steps.map((step, idx) => (
                        <div key={idx} className={`relative flex flex-col md:flex-row gap-8 md:gap-0 items-start md:items-center ${idx % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
                            {/* Number Circle */}
                            <div className="absolute left-0 md:left-1/2 -translate-x-0 md:-translate-x-1/2 flex items-center justify-center w-14 h-14 rounded-full bg-background border-4 border-primary z-10 font-bold text-primary">
                                {step.num}
                            </div>

                            {/* Content */}
                            <div className="pl-20 md:pl-0 md:w-1/2 md:px-12 text-left md:text-right group">
                                <div className={`${idx % 2 !== 0 ? "md:text-left" : ""}`}>
                                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{step.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                                </div>
                            </div>

                            {/* Empty Space for the other side */}
                            <div className="hidden md:block md:w-1/2" />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
