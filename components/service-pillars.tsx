"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SERVICE_PILLARS } from "@/config/services";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function ServicePillars() {
  return (
    <section className="py-24 bg-otiz-gray/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.2em] text-otiz-purple uppercase mb-4">
            Our Service Ecosystem
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-otiz-black tracking-tight mb-6">
            Beyond Hiring. We Architect Performance.
          </h3>
          <p className="text-otiz-slate max-w-2xl mx-auto text-lg">
            We design structured systems that align people, process, and
            accountability—transforming talent into measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICE_PILLARS.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-otiz-purple/10 flex items-center justify-center mb-4 group-hover:bg-otiz-purple transition-colors duration-300">
                    <service.icon className="w-6 h-6 text-otiz-purple group-hover:text-white transition-colors duration-300" />
                  </div>
                  <CardTitle className="text-xl font-bold text-otiz-black leading-tight">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="grow">
                  <CardDescription className="text-otiz-slate text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="pt-4">
                  <Link
                    href={service.href}
                    className="flex items-center text-sm font-bold text-otiz-purple group-hover:gap-2 transition-all"
                  >
                    {service.cta}
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
