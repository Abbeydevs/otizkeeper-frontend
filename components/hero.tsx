"use client";

import { motion } from "framer-motion";
import { ArrowRight, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      delay,
    },
  }),
};

export function Hero() {
  return (
    <section className="relative w-full min-h-[92vh] flex items-center overflow-hidden bg-linear-to-br from-white via-white to-rose-100">
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute -top-24 -left-24 w-150 h-150 rounded-full bg-white blur-[140px]" />

        <div className="absolute -top-16 -right-24 w-125 h-125 rounded-full bg-rose-300/35 blur-[130px]" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-75 rounded-full bg-white/60 blur-[80px]" />

        <div className="absolute -bottom-20 -left-16 w-100 h-100 rounded-full bg-white blur-[120px]" />

        <div className="absolute -bottom-16 -right-10 w-95 h-95 rounded-full bg-pink-200/30 blur-[110px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="flex justify-center mb-7"
        >
          <Badge
            variant="outline"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-otiz-purple/25 bg-white/60 backdrop-blur-sm text-otiz-purple text-[11px] font-bold tracking-widest uppercase"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-otiz-purple animate-pulse" />
            People → Performance → Prosperity
          </Badge>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.1}
          className="text-4xl md:text-6xl lg:text-[72px] font-extrabold text-otiz-black tracking-tight mb-6 max-w-5xl mx-auto leading-[1.08]"
        >
          Designing Structured{" "}
          <span className="relative inline-block text-otiz-purple">
            People &amp; Workforce
            <svg
              className="absolute -bottom-1 left-0 w-full"
              viewBox="0 0 400 8"
              preserveAspectRatio="none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 5.5 Q100 1.5 200 5.5 Q300 9.5 398 5.5"
                stroke="#6D28D9"
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity="0.35"
              />
            </svg>
          </span>{" "}
          Systems That Drive Performance.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.3}
          className="text-lg md:text-xl text-otiz-slate mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          We help businesses, professionals, and households build accountable,
          high-performing workforce systems across Nigeria and beyond.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.4}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Button
            size="lg"
            className="w-full sm:w-auto bg-otiz-purple hover:bg-otiz-deep text-white font-bold h-14 px-10 text-base shadow-[0_4px_20px_rgba(109,40,217,0.35)] hover:shadow-[0_6px_28px_rgba(109,40,217,0.50)] transition-all duration-300 active:scale-95 rounded-xl"
          >
            Book a Strategic Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border-2 border-otiz-purple/40 text-otiz-purple font-bold h-14 px-10 text-base hover:bg-white/50 hover:border-otiz-purple transition-all duration-300 active:scale-95 rounded-xl bg-white/30 backdrop-blur-sm"
          >
            Request Workforce Support
            <MoveRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.5}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
        >
          {[
            { value: "200+", label: "Professionals Placed" },
            { value: "50+", label: "Corporate Partners" },
            { value: "4", label: "Service Pillars" },
            { value: "98%", label: "Client Satisfaction" },
          ].map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-8">
              <div className="text-center">
                <div className="text-2xl font-extrabold text-otiz-black tracking-tight">
                  {stat.value}
                </div>
                <div className="text-[11px] font-semibold text-otiz-slate/70 tracking-wide uppercase mt-0.5">
                  {stat.label}
                </div>
              </div>
              {i < 3 && (
                <Separator
                  orientation="vertical"
                  className="h-8 bg-otiz-gray/70"
                />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
