"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ALL_POSTS, INSIGHTS_CATEGORIES } from "@/config/blog";
import Image from "next/image";

export function InsightsGrid() {
  const regularPosts = ALL_POSTS.filter((p) => !p.featured);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-wrap gap-8 mb-20 border-b border-otiz-gray pb-8">
          {INSIGHTS_CATEGORIES.map((cat) => (
            <button
              key={cat}
              className="text-xs font-bold uppercase tracking-widest text-otiz-slate hover:text-otiz-purple transition-colors cursor-pointer"
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {regularPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <Link href={`/insights/${post.slug}`} className="group block">
                <div className="aspect-square rounded-4xl overflow-hidden bg-otiz-gray mb-8">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={600}
                    height={600}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold text-otiz-purple uppercase tracking-widest">
                    {post.category}
                  </span>
                  <span className="text-[10px] text-otiz-slate font-medium uppercase">
                    {post.date}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-otiz-black leading-tight group-hover:text-otiz-purple transition-colors mb-4">
                  {post.title}
                </h3>
                <p className="text-otiz-slate line-clamp-2 leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-otiz-black group-hover:text-otiz-purple transition-colors">
                  Read Full Insight
                  <div className="h-px w-4 bg-otiz-black group-hover:bg-otiz-purple group-hover:w-8 transition-all" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
