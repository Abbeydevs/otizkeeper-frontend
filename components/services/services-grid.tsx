"use client";

import { motion } from "framer-motion";
import { SERVICES_CONTENT } from "@/config/services";
import { CheckCircle2 } from "lucide-react";

export function ServicesGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES_CONTENT.pillars.map((service, index) => (
            <motion.div
              key={service.id}
              className={`p-10 md:p-16 rounded-[3rem] ${service.color} ${service.textColor} shadow-xl flex flex-col justify-between min-h-125`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div>
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-10 ${service.id === "learning" ? "bg-otiz-purple text-white" : "bg-white/10 text-otiz-purple"}`}
                >
                  <service.icon className="w-7 h-7" />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                  {service.title}
                </h3>
                <p
                  className={`text-lg mb-10 leading-relaxed ${service.id === "learning" ? "text-otiz-slate" : "text-white/70"}`}
                >
                  {service.description}
                </p>

                <ul className="space-y-4">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 mt-1 shrink-0 text-otiz-purple" />
                      <span className="font-medium">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
