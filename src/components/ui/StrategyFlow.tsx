"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const flowItems = ["ESTRATÉGIA", "ARQUITETURA", "TECNOLOGIA", "RESULTADO"];

export function StrategyFlow() {
    return (
        <div className="flex flex-wrap justify-center items-center gap-4 text-sm font-mono text-primary/80 pt-8" aria-hidden="true">
            {flowItems.map((item, index) => (
                <div key={item} className="flex items-center gap-4">
                    <motion.span
                        initial={{ opacity: 0.3 }}
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.5,
                            ease: "easeInOut",
                        }}
                        className="font-bold tracking-widest text-primary"
                    >
                        {item}
                    </motion.span>

                    {index < flowItems.length - 1 && (
                        <motion.div
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: 32, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="h-[1px] bg-primary/20 flex items-center justify-center overflow-hidden"
                        >
                            <ArrowRight className="w-3 h-3 text-primary/50" />
                        </motion.div>
                    )}
                </div>
            ))}
        </div>
    );
}
