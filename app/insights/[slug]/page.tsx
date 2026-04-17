"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Share2 } from "lucide-react";
import { ALL_POSTS } from "@/config/blog";
import { Button } from "@/components/ui/button";

export default function PostPage() {
  const params = useParams();
  const post = ALL_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-white">
      {/* Header Section */}
      <header className="pt-32 pb-16 bg-otiz-gray/20">
        <div className="container mx-auto px-6 max-w-5xl">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-otiz-purple mb-12 hover:gap-3 transition-all"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Intelligence Hub
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs font-bold text-otiz-purple uppercase tracking-widest">
                {post.category}
              </span>
              <div className="w-1 h-1 rounded-full bg-otiz-slate/30" />
              <div className="flex items-center gap-2 text-xs text-otiz-slate font-bold uppercase tracking-widest">
                <Clock className="w-3 h-3" /> {post.readTime}
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-otiz-black tracking-tighter leading-[1.1] mb-8">
              {post.title}
            </h1>

            <div className="flex items-center justify-between border-t border-otiz-gray pt-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-otiz-purple flex items-center justify-center text-white font-bold">
                  OK
                </div>
                <div>
                  <p className="text-sm font-bold text-otiz-black">
                    Otiz Keeper Intelligence
                  </p>
                  <p className="text-xs text-otiz-slate uppercase font-bold tracking-widest">
                    {post.date}
                  </p>
                </div>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-otiz-gray"
              >
                <Share2 className="w-4 h-4 text-otiz-slate" />
              </Button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="container mx-auto px-6 max-w-7xl py-20">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Post Body */}
          <div className="lg:w-2/3">
            <div className="aspect-video relative rounded-[2.5rem] overflow-hidden mb-16 shadow-2xl border-8 border-white">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>

            <div
              className="prose prose-lg max-w-none text-otiz-slate prose-headings:text-otiz-black prose-headings:font-black prose-headings:tracking-tighter prose-blockquote:border-otiz-purple prose-blockquote:bg-otiz-gray/30 prose-blockquote:p-8 prose-blockquote:rounded-2xl prose-blockquote:not-italic prose-blockquote:text-2xl"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          <aside className="lg:w-1/3">
            <div className="sticky top-32 p-10 bg-otiz-black rounded-[2.5rem] text-white">
              <h4 className="text-sm font-bold tracking-[0.3em] text-otiz-purple uppercase mb-8">
                Structural Brief
              </h4>
              <ul className="space-y-8">
                {post.summaryPoints?.map((point, index) => (
                  <li key={index} className="flex gap-4">
                    <span className="text-otiz-purple font-black">
                      0{index + 1}
                    </span>
                    <p className="text-sm leading-relaxed text-slate-300 font-medium">
                      {point}
                    </p>
                  </li>
                ))}
              </ul>
              <div className="mt-12 pt-8 border-t border-white/10">
                <p className="text-xs font-bold text-white uppercase tracking-widest mb-4">
                  Ready to architect?
                </p>
                <Button className="w-full bg-otiz-purple hover:bg-otiz-deep rounded-full h-12 font-black">
                  Book Consultation
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
