"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { INNOVATION_CONTENT } from "@/config/innovation";

export function InnovationSection() {
  return (
    <section className="py-24 bg-otiz-gray/20 border-y border-otiz-gray/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm font-bold tracking-[0.2em] text-otiz-purple uppercase mb-6">
              Future Systems
            </h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-otiz-black tracking-tight mb-8">
              {INNOVATION_CONTENT.title}
            </h3>
            <p className="text-lg text-otiz-slate mb-12 max-w-2xl mx-auto">
              {INNOVATION_CONTENT.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {INNOVATION_CONTENT.platforms.map((platform) => (
                <div
                  key={platform.name}
                  className="p-8 rounded-2xl bg-white border border-otiz-gray shadow-sm flex flex-col items-center text-center group hover:border-otiz-purple/30 transition-all"
                >
                  <div className="text-2xl font-black text-otiz-black mb-2 group-hover:text-otiz-purple transition-colors">
                    {platform.name}
                  </div>
                  <div className="text-sm font-semibold text-otiz-slate uppercase tracking-wider">
                    {platform.description}
                  </div>
                </div>
              ))}
            </div>

            <Button
              variant="link"
              className="text-otiz-purple font-bold text-lg group p-0"
            >
              {INNOVATION_CONTENT.cta}
              <ArrowUpRight className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
