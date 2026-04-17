"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { DIFFERENCE_ITEMS } from "@/config/difference";

export function DifferenceSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-[10%] right-[-6%] w-85 h-85 rounded-full bg-otiz-purple/5 blur-[90px]" />
        <div className="absolute bottom-[5%] left-[-4%] w-70 h-70 rounded-full bg-purple-300/[0.07] blur-[80px]" />
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 flex flex-col items-start lg:hidden"
        >
          <Badge
            variant="outline"
            className="mb-4 px-3 py-1 rounded-full border-otiz-purple/25 bg-otiz-purple/5 text-otiz-purple text-[11px] font-bold tracking-widest uppercase"
          >
            The Strategic Edge
          </Badge>
          <h3 className="text-4xl font-extrabold text-otiz-black tracking-tight mb-4">
            Why Otiz Is Different
          </h3>
          <p className="text-otiz-slate text-lg leading-relaxed">
            We focus on structure. We do not treat HR as administration. We
            treat it as infrastructure.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
            }}
            className="hidden lg:flex lg:w-1/3 sticky top-32 flex-col"
          >
            <Badge
              variant="outline"
              className="mb-5 self-start px-3 py-1 rounded-full border-otiz-purple/25 bg-otiz-purple/5 text-otiz-purple text-[11px] font-bold tracking-widest uppercase"
            >
              The Strategic Edge
            </Badge>

            <h3 className="text-4xl font-extrabold text-otiz-black tracking-tight mb-5 leading-[1.1]">
              Why Otiz Is Different
            </h3>

            <Separator className="mb-5 bg-otiz-gray" />

            <p className="text-otiz-slate text-lg mb-8 leading-relaxed">
              We focus on structure. We do not treat HR as administration. We
              treat it as infrastructure.
            </p>

            <div className="relative p-6 rounded-2xl bg-otiz-purple text-white overflow-hidden">
              <svg
                className="absolute -top-6 -right-6 opacity-10"
                width="120"
                height="120"
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="60"
                  cy="60"
                  r="55"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeDasharray="5 5"
                />
                <circle cx="60" cy="60" r="35" stroke="white" strokeWidth="1" />
              </svg>

              <span className="block text-4xl font-extrabold text-white/20 leading-none mb-2 select-none">
                &ldquo;
              </span>
              <p className="text-lg font-bold italic leading-snug relative z-10">
                We don&apos;t just fill positions. We structure performance.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <div className="flex gap-1.5">
                {DIFFERENCE_ITEMS.map((_, i) => (
                  <span
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-otiz-purple/30"
                  />
                ))}
              </div>
              <span className="text-[11px] font-semibold text-otiz-slate/50 tracking-wide uppercase">
                {DIFFERENCE_ITEMS.length} Differentiators
              </span>
            </div>
          </motion.div>

          <div className="lg:w-2/3 space-y-5">
            {DIFFERENCE_ITEMS.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
                }}
                className="group flex gap-5 p-6 rounded-2xl border border-otiz-gray hover:border-otiz-purple/25 hover:bg-otiz-purple/2 hover:shadow-[0_4px_24px_rgba(109,40,217,0.07)] transition-all duration-300"
              >
                <div className="shrink-0 flex flex-col items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-otiz-purple/10 group-hover:bg-otiz-purple/15 flex items-center justify-center transition-colors duration-300">
                    <CheckCircle2 className="w-5 h-5 text-otiz-purple" />
                  </div>
                  <span className="text-[10px] font-bold text-otiz-slate/30 tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex flex-col gap-1.5 pt-1">
                  <h4 className="text-[17px] font-bold text-otiz-black group-hover:text-otiz-purple transition-colors duration-300 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-otiz-slate leading-relaxed text-[15px]">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
