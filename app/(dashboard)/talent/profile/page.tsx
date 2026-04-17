"use client";

import * as React from "react";
import { User, Briefcase, ShieldCheck, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function PerformanceProfile() {
  return (
    <div className="max-w-4xl space-y-10 pb-20">
      <div className="flex items-center justify-between border-b border-otiz-gray pb-8">
        <div>
          <h1 className="text-3xl font-black text-otiz-black tracking-tighter">
            Performance Profile
          </h1>
          <p className="text-otiz-slate text-sm font-medium mt-1">
            Architect your professional data to optimize matching accuracy.
          </p>
        </div>
        <Button className="rounded-full bg-otiz-black hover:bg-otiz-purple px-8 gap-2 font-bold transition-all">
          <Save className="w-4 h-4" />
          Save Changes
        </Button>
      </div>

      <div className="space-y-12">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-black text-otiz-black uppercase text-[10px] tracking-[0.2em] mb-2 flex items-center gap-2">
              <User className="w-3 h-3 text-otiz-purple" /> 01. Core Identity
            </h3>
            <p className="text-xs text-otiz-slate leading-relaxed">
              Your primary professional markers used for initial intelligence
              scoring.
            </p>
          </div>
          <div className="md:col-span-2 bg-white p-8 rounded-4xl border border-otiz-gray space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-otiz-slate ml-2">
                  Display Name
                </label>
                <Input
                  defaultValue="Biodun"
                  className="rounded-full border-otiz-gray focus:ring-otiz-purple h-12 px-5"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-otiz-slate ml-2">
                  Current Role
                </label>
                <Input
                  placeholder="e.g. Software Architect"
                  className="rounded-full border-otiz-gray focus:ring-otiz-purple h-12 px-5"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-otiz-slate ml-2">
                Professional Brief (Bio)
              </label>
              <Textarea
                placeholder="Describe your structural impact in 2-3 sentences..."
                className="rounded-3xl border-otiz-gray focus:ring-otiz-purple p-5 min-h-30"
              />
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-black text-otiz-black uppercase text-[10px] tracking-[0.2em] mb-2 flex items-center gap-2">
              <Briefcase className="w-3 h-3 text-otiz-purple" /> 02. Experience
              Architecture
            </h3>
            <p className="text-xs text-otiz-slate leading-relaxed">
              Define the ROI and outcomes of your previous structural roles.
            </p>
          </div>
          <div className="md:col-span-2 space-y-4">
            <div className="bg-white p-8 rounded-4xl border border-otiz-gray group hover:border-otiz-purple transition-colors cursor-pointer">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-lg text-otiz-black">
                    Senior Software Engineer
                  </h4>
                  <p className="text-sm font-medium text-otiz-purple">
                    Invoiss · Full-time
                  </p>
                  <p className="text-xs text-otiz-slate mt-1">
                    Jan 2024 — Present
                  </p>
                </div>
                <div className="p-2 rounded-lg bg-otiz-gray group-hover:bg-otiz-purple/10 text-otiz-slate group-hover:text-otiz-purple transition-all">
                  <ShieldCheck className="w-4 h-4" />
                </div>
              </div>
            </div>

            <Button
              variant="outline"
              className="w-full rounded-full border-dashed border-otiz-gray h-14 font-bold text-otiz-slate hover:text-otiz-purple hover:border-otiz-purple transition-all"
            >
              + Add Experience Node
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
