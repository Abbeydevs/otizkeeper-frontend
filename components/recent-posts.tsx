"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { RECENT_POSTS } from "@/config/blog";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function RecentPosts() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl text-left">
            <h2 className="text-sm font-bold tracking-[0.2em] text-otiz-purple uppercase mb-4">
              Intelligence
            </h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-otiz-black tracking-tight mb-4">
              Workforce Insights & Performance Intelligence
            </h3>
          </div>
          <Link href="/insights">
            <Button
              variant="outline"
              className="border-otiz-purple text-otiz-purple font-bold px-6"
            >
              Explore All Insights
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {RECENT_POSTS.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-otiz-gray bg-white hover:border-otiz-purple/20 hover:shadow-lg transition-all duration-300 group flex flex-col">
                <CardHeader className="pb-4">
                  <span className="text-[10px] font-bold text-otiz-purple uppercase tracking-widest mb-3 block">
                    {post.category}
                  </span>
                  <CardTitle className="text-lg font-bold text-otiz-black leading-snug group-hover:text-otiz-purple transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="grow">
                  <p className="text-otiz-slate text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                </CardContent>
                <CardFooter className="pt-4 border-t border-otiz-gray/50">
                  <div className="flex items-center justify-between w-full">
                    <span className="text-[10px] font-medium text-otiz-slate uppercase">
                      {post.date}
                    </span>
                    <ArrowRight className="w-4 h-4 text-otiz-purple opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
