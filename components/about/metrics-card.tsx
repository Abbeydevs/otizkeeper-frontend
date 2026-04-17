"use client";

import { ABOUT_METRICS } from "@/config/about";
import { Button } from "@/components/ui/button";

export function MetricsCard() {
  return (
    <div className="relative w-full max-auto bg-[#111111] rounded-[3rem] overflow-hidden p-8 md:p-16 shadow-2xl border border-white/5">
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-12">
        <div className="text-left max-w-sm">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
            Making a Difference, One Step at a Time
          </h3>
          <Button className="bg-otiz-purple hover:bg-otiz-deep text-white px-8 h-12 rounded-full font-bold transition-all active:scale-95">
            Partner With Us
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-x-12 gap-y-10">
          {ABOUT_METRICS.map((stat) => (
            <div key={stat.label} className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                <stat.icon className="w-6 h-6 text-otiz-purple" />
              </div>
              <div>
                <div className="text-3xl font-black text-white">
                  {stat.value}
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
