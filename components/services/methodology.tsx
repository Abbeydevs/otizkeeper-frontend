"use client";

import { motion } from "framer-motion";
import { METHODOLOGY } from "@/config/services";

export function Methodology() {
  return (
    <section className="py-32 bg-otiz-black text-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
            <h2 className="text-sm font-bold tracking-[0.4em] text-otiz-purple uppercase mb-6">
              The Process
            </h2>
            <h3 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight mb-8">
              How We <br />
              <span className="text-otiz-purple">Architect</span> <br />
              Performance.
            </h3>
            <p className="text-slate-400 text-lg leading-relaxed">
              We follow a rigorous four-stage engineering process to ensure your
              people systems are built for scale.
            </p>
          </div>

          <div className="lg:w-2/3 space-y-24">
            {METHODOLOGY.map((step, index) => (
              <motion.div
                key={step.number}
                className="group relative pl-12 md:pl-20 border-l border-white/10 hover:border-otiz-purple transition-colors duration-500"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="absolute left-0 top-0 -translate-x-1/2 text-5xl md:text-7xl font-black text-white/5 group-hover:text-otiz-purple/20 transition-colors select-none">
                  {step.number}
                </span>

                <h4 className="text-2xl md:text-3xl font-bold mb-6 group-hover:text-otiz-purple transition-colors">
                  {step.title}
                </h4>
                <p className="text-xl text-slate-300 leading-relaxed max-w-xl">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
