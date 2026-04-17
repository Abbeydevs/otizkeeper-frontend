"use client";

import { motion } from "framer-motion";
import { Search, Download } from "lucide-react";
import { Input } from "@/components/ui/input";

export function ResourceLibrary() {
  const resources = [
    { title: "The 2026 Workforce Performance Report", type: "PDF Report" },
    { title: "SLA Framework for Domestic Staffing", type: "Template" },
    { title: "Organizational Design Checklist", type: "Checklist" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          <div className="text-left">
            <h3 className="text-3xl font-black text-otiz-black tracking-tight">
              Resource Library
            </h3>
            <p className="text-otiz-slate">
              Downloadable frameworks and performance blueprints.
            </p>
          </div>
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-otiz-slate" />
            <Input
              placeholder="Search resources..."
              className="pl-12 h-12 rounded-full border-otiz-gray bg-otiz-gray/20 focus-visible:ring-otiz-purple"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              className="p-8 rounded-4xl border border-otiz-gray hover:border-otiz-purple/20 transition-all group flex flex-col justify-between"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div>
                <span className="text-[10px] font-bold text-otiz-purple uppercase tracking-widest block mb-4">
                  {resource.type}
                </span>
                <h4 className="text-xl font-bold text-otiz-black group-hover:text-otiz-purple transition-colors mb-8">
                  {resource.title}
                </h4>
              </div>
              <button className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-otiz-black group-hover:text-otiz-purple transition-colors">
                Download <Download className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
