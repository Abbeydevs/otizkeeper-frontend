"use client";

import { motion } from "framer-motion";
import { CREEDS } from "@/config/about";

export function CreedsGrid() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-[0.4em] text-otiz-purple uppercase mb-6">
              The Standard
            </h2>
            <h3 className="text-4xl md:text-6xl font-black text-otiz-black tracking-tighter">
              Our C.R.E.E.D.S.
            </h3>
          </div>
          <p className="text-otiz-slate text-lg max-w-md leading-relaxed">
            Every system we architect is governed by these six non-negotiable
            pillars of workforce excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-otiz-gray border border-otiz-gray overflow-hidden rounded-4xl">
          {CREEDS.map((item, index) => (
            <motion.div
              key={item.title}
              className="group relative p-12 bg-white hover:bg-otiz-purple transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-otiz-gray flex items-center justify-center mb-8 group-hover:bg-white/20 transition-colors">
                  <item.icon className="w-6 h-6 text-otiz-purple group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-2xl font-bold text-otiz-black group-hover:text-white mb-4">
                  {item.title}
                </h4>
                <p className="text-otiz-slate group-hover:text-white/80 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <span className="absolute -bottom-6 -right-4 text-[12rem] font-black text-otiz-gray/10 group-hover:text-white/5 transition-colors select-none">
                {item.title.charAt(0)}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
