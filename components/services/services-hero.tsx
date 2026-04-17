"use client";

import { motion } from "framer-motion";
import { SERVICES_CONTENT } from "@/config/services";

export function ServicesHero() {
  const { hero } = SERVICES_CONTENT;

  return (
    <section className="relative w-full py-24 md:py-32 bg-white overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-12 bg-otiz-purple" />
            <span className="text-xs font-bold tracking-[0.4em] uppercase text-otiz-purple">
              {hero.badge}
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-otiz-black tracking-tighter leading-[0.9] mb-12">
            Architecting <br />
            <span className="text-otiz-purple">Excellence.</span>
          </h1>

          <p className="text-xl md:text-2xl text-otiz-slate max-w-2xl leading-relaxed">
            {hero.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
