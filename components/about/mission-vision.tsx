"use client";

import { motion } from "framer-motion";
import { MISSION_VISION } from "@/config/about";

export function MissionVision() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-[3rem] overflow-hidden shadow-2xl">
          <motion.div
            className="bg-otiz-black p-12 md:p-20 text-white flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-otiz-purple" />
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-otiz-purple">
                {MISSION_VISION.mission.title}
              </span>
            </div>
            <p className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
              {MISSION_VISION.mission.content}
            </p>
          </motion.div>

          <motion.div
            className="bg-otiz-purple p-12 md:p-20 text-white flex flex-col justify-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-white" />
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-white/70">
                {MISSION_VISION.vision.title}
              </span>
            </div>
            <p className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
              {MISSION_VISION.vision.content}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
