"use client";

import { motion } from "framer-motion";
import { LEADERSHIP } from "@/config/about";

export function Leadership() {
  return (
    <section className="py-32 bg-otiz-black text-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <motion.div
            className="flex-1 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative z-10 aspect-4/5 rounded-4xl overflow-hidden border-8 border-otiz-purple/30">
              <div className="absolute inset-0 bg-otiz-purple/10 mix-blend-overlay" />
              <div className="w-full h-full bg-otiz-gray flex items-center justify-center italic text-otiz-black">
                [Founder Image: {LEADERSHIP.name}]
              </div>
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 border border-white/10 rounded-full z-0" />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-otiz-purple/20 blur-[100px] z-0" />
          </motion.div>

          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-otiz-purple" />
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-otiz-purple">
                Lead Architect
              </span>
            </div>

            <h3 className="text-4xl md:text-5xl font-black tracking-tighter mb-2">
              {LEADERSHIP.name}
            </h3>
            <p className="text-xl font-bold text-otiz-purple mb-10">
              {LEADERSHIP.role}
            </p>

            <p className="text-xl text-slate-300 leading-relaxed mb-12">
              {LEADERSHIP.bio}
            </p>

            <div className="grid grid-cols-2 gap-8 py-8 border-t border-white/10">
              <div>
                <p className="text-[10px] font-bold text-otiz-purple uppercase tracking-widest mb-1">
                  Expertise
                </p>
                <p className="font-bold">Workforce Architecture</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-otiz-purple uppercase tracking-widest mb-1">
                  Focus
                </p>
                <p className="font-bold">Performance Intelligence</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
