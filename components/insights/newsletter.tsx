"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Newsletter() {
  return (
    <section className="py-24 bg-otiz-purple">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="bg-otiz-black rounded-[3rem] p-12 md:p-24 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-96 h-96 bg-otiz-purple/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-sm font-bold tracking-[0.4em] text-otiz-purple uppercase mb-6">
                Intelligence Delivery
              </h2>
              <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-tight mb-6">
                Get the{" "}
                <span className="text-otiz-purple text-italic font-medium italic">
                  Structural Brief™
                </span>
              </h3>
              <p className="text-xl text-slate-400 leading-relaxed">
                Strategic workforce intelligence, structural audits, and
                performance insights delivered directly to your inbox. No fluff.
                Just architecture.
              </p>
            </div>

            <div className="lg:w-1/2 w-full">
              <form className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your professional email"
                  className="h-16 rounded-full bg-white/5 border-white/10 text-white px-8 focus-visible:ring-otiz-purple focus-visible:border-otiz-purple"
                />
                <Button className="h-16 px-10 rounded-full bg-otiz-purple hover:bg-otiz-deep text-white font-black text-lg transition-all active:scale-95">
                  Subscribe
                </Button>
              </form>
              <p className="mt-4 text-[10px] uppercase tracking-widest text-slate-500 font-bold ml-4">
                Structured Intelligence • Monthly Release • Unsubscribe Anytime
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
