"use client";

import { motion } from "framer-motion";
import { TRUST_STATS } from "@/config/marketing";

export function TrustSection() {
  return (
    <section className="py-20 bg-white border-b border-otiz-gray">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {TRUST_STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-black text-otiz-purple mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-otiz-slate uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
