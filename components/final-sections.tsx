"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { VISION_CONTENT } from "@/config/footer";

export function OtizDream() {
  return (
    <section className="py-24 bg-otiz-purple text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-5xl font-extrabold mb-8 tracking-tight">
            {VISION_CONTENT.title}
          </h3>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed">
            {VISION_CONTENT.description}
          </p>
          <Button
            variant="outline"
            className=" bg-transparent border-white text-white hover:bg-white hover:text-otiz-purple font-bold h-12 px-8"
          >
            {VISION_CONTENT.cta}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="rounded-3xl bg-otiz-black p-12 md:p-20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-10 tracking-tight">
              Your People Systems Determine Your Outcomes.
            </h3>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-otiz-purple hover:bg-otiz-deep text-white font-bold h-14 px-10"
              >
                Book a Strategic Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-otiz-black font-bold h-14 px-10 bg-transparent"
              >
                Access O&apos;Connect™
              </Button>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-otiz-purple/20 blur-[100px] z-0" />
        </div>
      </div>
    </section>
  );
}
