"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { OCONNECT_CONTENT } from "@/config/oconnect";

export function OConnectSection() {
  return (
    <section className="py-24 bg-otiz-black text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            className="flex-1 text-left"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm font-bold tracking-[0.2em] text-otiz-purple uppercase mb-6">
              Platform Intelligence
            </h2>
            <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-8 leading-tight">
              {OCONNECT_CONTENT.title}
            </h3>
            <p className="text-xl text-slate-300 mb-6 leading-relaxed">
              {OCONNECT_CONTENT.description}
            </p>
            <p className="text-xl font-bold text-otiz-purple mb-10">
              {OCONNECT_CONTENT.highlight}
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-otiz-purple hover:bg-otiz-deep text-white font-bold h-14 px-8"
              >
                {OCONNECT_CONTENT.employerCTA}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-otiz-black font-bold h-14 px-8 transition-colors bg-transparent"
              >
                {OCONNECT_CONTENT.professionalCTA}
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="flex-1 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative z-10 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <div className="space-y-4">
                <div className="h-2 w-24 bg-otiz-purple rounded-full" />
                <div className="h-4 w-full bg-white/10 rounded-md" />
                <div className="h-4 w-3/4 bg-white/10 rounded-md" />
                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div className="h-20 bg-otiz-purple/20 rounded-lg border border-otiz-purple/30" />
                  <div className="h-20 bg-white/5 rounded-lg border border-white/10" />
                  <div className="h-20 bg-white/5 rounded-lg border border-white/10" />
                </div>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-otiz-purple/20 rounded-full blur-[120px] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
