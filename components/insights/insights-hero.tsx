"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ALL_POSTS, type Post } from "@/config/blog";
import { ArrowRight } from "lucide-react";

export function InsightsHero() {
  const featured: Post =
    ALL_POSTS.find((post) => post.featured) || ALL_POSTS[0];

  return (
    <section className="relative w-full py-20 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="lg:w-3/5 relative group">
            <div className="aspect-16/10 rounded-[2.5rem] overflow-hidden border-8 border-otiz-gray shadow-2xl relative z-10">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-otiz-purple/10 rounded-full blur-3xl z-0" />
          </div>

          <div className="lg:w-2/5 text-left">
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 rounded-full bg-otiz-purple/10 text-otiz-purple text-[10px] font-bold uppercase tracking-widest">
                Featured Insight
              </span>
              <span className="text-[10px] font-bold text-otiz-slate uppercase tracking-widest">
                {featured.readTime}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-otiz-black tracking-tighter leading-[1.1] mb-8">
              {featured.title}
            </h1>

            <p className="text-xl text-otiz-slate leading-relaxed mb-10">
              {featured.excerpt}
            </p>

            <Link
              href={featured.href}
              className="group inline-flex items-center gap-3 text-otiz-black font-black uppercase text-xs tracking-widest border-b-2 border-otiz-purple pb-2 hover:text-otiz-purple transition-colors"
            >
              Read Intelligence Report{" "}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
