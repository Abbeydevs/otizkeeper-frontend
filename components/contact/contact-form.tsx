"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { INQUIRY_TYPES } from "@/config/contact";

export function ContactForm() {
  return (
    <motion.div
      className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-otiz-gray"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-otiz-slate ml-4">
              Full Name
            </label>
            <Input
              placeholder="John Doe"
              className="rounded-full h-14 border-otiz-gray px-6 focus-visible:ring-otiz-purple"
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-otiz-slate ml-4">
              Email Address
            </label>
            <Input
              type="email"
              placeholder="john@company.com"
              className="rounded-full h-14 border-otiz-gray px-6 focus-visible:ring-otiz-purple"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-otiz-slate ml-4">
            Service Interest
          </label>
          <Select>
            <SelectTrigger className="rounded-full h-14 border-otiz-gray px-6 focus:ring-otiz-purple">
              <SelectValue placeholder="Select a Service Pillar" />
            </SelectTrigger>
            <SelectContent>
              {INQUIRY_TYPES.map((type) => (
                <SelectItem
                  key={type}
                  value={type.toLowerCase().replace(/\s+/g, "-")}
                >
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-otiz-slate ml-4">
            How can we help?
          </label>
          <Textarea
            placeholder="Briefly describe your structural needs..."
            className="rounded-4xl min-h-37.5 border-otiz-gray p-6 focus-visible:ring-otiz-purple"
          />
        </div>

        <Button className="w-full h-16 rounded-full bg-otiz-purple hover:bg-otiz-deep text-white font-black text-lg transition-all active:scale-95 shadow-lg shadow-otiz-purple/20">
          Send Intelligence Request
        </Button>
      </form>
    </motion.div>
  );
}
