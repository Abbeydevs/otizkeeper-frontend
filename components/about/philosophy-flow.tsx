"use client";

import { motion } from "framer-motion";
import { PHILOSOPHY } from "@/config/about";
import { ArrowRight } from "lucide-react";
import { Fragment } from "react/jsx-runtime";

export function PhilosophyFlow() {
  const steps = ["People", "Performance", "Prosperity"];

  return (
    <section className="py-32 bg-otiz-gray/20">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-sm font-bold tracking-[0.4em] text-otiz-purple uppercase mb-6">
            {PHILOSOPHY.tagline}
          </h2>
          <h3 className="text-4xl md:text-6xl font-black text-otiz-black tracking-tighter mb-8">
            The Blueprint for Success.
          </h3>
          <p className="text-xl text-otiz-slate max-w-3xl mx-auto leading-relaxed">
            {PHILOSOPHY.description}
          </p>
        </motion.div>

        <div className="flex flex-col md:row items-center justify-center gap-8 md:gap-4 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <Fragment key={step}>
              <motion.div
                className="relative group cursor-default"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="px-10 py-16 md:px-14 md:py-20 rounded-4xl bg-white border border-otiz-gray shadow-sm group-hover:border-otiz-purple group-hover:shadow-xl transition-all duration-500">
                  <span className="block text-4xl md:text-5xl font-black text-otiz-black group-hover:text-otiz-purple transition-colors">
                    {step}
                  </span>
                </div>
              </motion.div>

              {index < steps.length - 1 && (
                <motion.div
                  className="hidden md:block"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.3 }}
                >
                  <ArrowRight className="w-8 h-8 text-otiz-purple/40" />
                </motion.div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
