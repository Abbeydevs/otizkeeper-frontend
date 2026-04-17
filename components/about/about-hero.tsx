"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play, ArrowUpRight } from "lucide-react";
import { ABOUT_HERO_CONTENT } from "@/config/about";
import { VideoModal } from "./video-modal";

export function AboutHero() {
  const [isVideoOpen, setIsVideoOpen] = React.useState(false);
  const hero = ABOUT_HERO_CONTENT;

  return (
    <section className="relative w-full bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-otiz-gray/20 z-0" />

      <div className="container mx-auto px-6 pt-24 pb-32 md:pt-32 md:pb-48 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="h-px w-12 bg-otiz-purple" />
                <span className="text-xs font-bold tracking-[0.3em] uppercase text-otiz-purple">
                  {hero.badge}
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-otiz-black tracking-tighter leading-[0.9] mb-12">
                Designing <br />
                <span className="text-otiz-purple">Structure.</span> <br />
                Driving Results.
              </h1>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
                <button
                  onClick={() => setIsVideoOpen(true)}
                  className="group flex items-center gap-4 p-2 pr-6 rounded-full bg-otiz-black text-white hover:bg-otiz-purple transition-all duration-300"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-otiz-black">
                    <Play className="w-5 h-5 fill-current" />
                  </div>
                  <span className="font-bold text-sm tracking-wide uppercase">
                    Watch the Vision
                  </span>
                </button>

                <div className="flex items-center gap-2 text-otiz-slate font-semibold text-sm">
                  <span>Scroll to explore</span>
                  <div className="w-8 h-px bg-otiz-slate/30" />
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-4 hidden lg:block">
            <motion.div
              className="p-8 border border-otiz-gray bg-white/50 backdrop-blur-md rounded-2xl shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-10 h-10 bg-otiz-purple/10 rounded-lg flex items-center justify-center">
                  <ArrowUpRight className="text-otiz-purple w-5 h-5" />
                </div>
                <span className="text-[10px] font-bold text-otiz-slate uppercase tracking-widest">
                  Est. 2016
                </span>
              </div>
              <p className="text-sm font-bold text-otiz-black mb-2 uppercase">
                Core Intent
              </p>
              <p className="text-otiz-slate text-sm leading-relaxed">
                Bridging the gap between human capital and organizational ROI
                through systemic architecture.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="relative bg-otiz-black pt-0 pb-32">
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20">
            <motion.div
              className="relative w-full lg:w-3/5 aspect-4/3 -mt-24 md:-mt-32 rounded-br-[8rem] overflow-hidden border-8 border-white shadow-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src={hero.overlappingImage.src}
                alt={hero.overlappingImage.alt}
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            <motion.div
              className="lg:w-2/5 flex flex-col justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-sm font-bold text-otiz-purple uppercase tracking-[0.4em] mb-6">
                Our Impact
              </h2>
              <p className="text-2xl md:text-3xl text-white font-light leading-snug">
                {hero.description}
              </p>
              <div className="mt-12 h-0.5 w-24 bg-otiz-purple" />
            </motion.div>
          </div>
        </div>
      </div>

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoUrl={hero.videoUrl}
      />
    </section>
  );
}
