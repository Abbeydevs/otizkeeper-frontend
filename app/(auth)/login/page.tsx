"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock, Mail, ArrowRight } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulation
    setTimeout(() => {
      router.push("/talent/dashboard");
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <motion.div
        className="w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="text-center mb-10">
          <Link
            href="/"
            className="text-2xl font-black tracking-tighter text-otiz-black"
          >
            OTIZ<span className="text-otiz-purple">KEEPER</span>
          </Link>
          <p className="text-otiz-slate mt-2 font-medium">
            Intelligence Terminal Access
          </p>
        </div>

        <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-otiz-gray relative overflow-hidden">
          {/* Subtle decorative accent */}
          <div className="absolute top-0 right-0 w-2 h-full bg-otiz-purple" />

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-otiz-slate ml-4">
                Professional Email
              </label>
              <div className="relative">
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-otiz-slate" />
                <Input
                  type="email"
                  placeholder="name@company.com"
                  className="h-14 rounded-full pl-12 border-otiz-gray focus-visible:ring-otiz-purple"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center px-4">
                <label className="text-[10px] font-bold uppercase tracking-widest text-otiz-slate">
                  Password
                </label>
                <Link
                  href="/forgot-password"
                  className="text-[10px] font-bold uppercase tracking-widest text-otiz-purple hover:underline"
                >
                  Forgot?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-otiz-slate" />
                <Input
                  type="password"
                  placeholder="••••••••"
                  className="h-14 rounded-full pl-12 border-otiz-gray focus-visible:ring-otiz-purple"
                  required
                />
              </div>
            </div>

            <Button
              disabled={isLoading}
              className="w-full h-14 rounded-full bg-otiz-black hover:bg-otiz-purple text-white font-bold transition-all active:scale-95 group"
            >
              {isLoading ? "Authenticating..." : "Access Dashboard"}
              {!isLoading && (
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              )}
            </Button>
          </form>

          <div className="mt-8 pt-8 border-t border-otiz-gray text-center">
            <p className="text-sm text-otiz-slate font-medium">
              New to OtizKeeper?{" "}
              <Link
                href="/signup"
                className="text-otiz-purple font-black hover:underline"
              >
                Create Account
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-6">
          <Link
            href="/privacy"
            className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-otiz-purple"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-otiz-purple"
          >
            Terms
          </Link>
          <Link
            href="/help"
            className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-otiz-purple"
          >
            Help
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
