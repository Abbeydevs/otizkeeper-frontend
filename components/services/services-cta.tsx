"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function ServicesCTA() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="bg-otiz-purple rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h3 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-tight">
              Ready to Structure Your Growth?
            </h3>
            <p className="text-xl text-white/80 mb-12 leading-relaxed">
              Schedule a consultation with our lead architects to discuss which
              service pillar best fits your current organizational needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button
                size="lg"
                className="bg-white text-otiz-purple hover:bg-otiz-gray font-black h-16 px-10 rounded-full text-lg transition-transform active:scale-95"
              >
                Book a Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-otiz-purple font-black h-16 px-10 rounded-full text-lg transition-transform active:scale-95"
              >
                Access O&apos;Connect™ <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
