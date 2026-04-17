"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { RECENT_INSIGHTS } from "@/config/marketing";

export function InsightsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-[0.2em] text-otiz-purple uppercase mb-4">
              Intelligence
            </h2>
            <h3 className="text-3xl md:text-5xl font-extrabold text-otiz-black tracking-tight">
              Workforce Insights & Performance Intelligence
            </h3>
          </div>
          <Button
            variant="outline"
            className="border-otiz-purple text-otiz-purple font-bold"
          >
            Explore All Insights
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {RECENT_INSIGHTS.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-none bg-otiz-gray/30 hover:bg-otiz-gray/50 transition-colors group cursor-pointer">
                <CardHeader>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-bold text-otiz-purple uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="text-xs text-otiz-slate font-medium">
                      {post.date}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold text-otiz-black group-hover:text-otiz-purple transition-colors">
                    {post.title}
                  </h4>
                </CardHeader>
                <CardContent>
                  <p className="text-otiz-slate leading-relaxed">
                    {post.excerpt}
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center text-sm font-bold text-otiz-black group-hover:gap-2 transition-all">
                    Read Article{" "}
                    <ArrowRight className="ml-1 h-4 w-4 text-otiz-purple" />
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
