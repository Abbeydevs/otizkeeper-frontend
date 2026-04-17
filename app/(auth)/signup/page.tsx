"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Lock, User, ArrowRight } from "lucide-react";

export default function SignUpPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      router.push("/login");
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-otiz-gray/20">
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
            Join the Performance Architecture
          </p>
        </div>

        <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-otiz-gray relative overflow-hidden">
          <div className="absolute top-0 right-0 w-2 h-full bg-otiz-purple" />

          <form onSubmit={handleSignUp} className="space-y-5">
            {/* Full Name */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-otiz-slate ml-4">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-otiz-slate" />
                <Input
                  placeholder="John Doe"
                  className="h-14 rounded-full pl-12 border-otiz-gray focus-visible:ring-otiz-purple"
                  required
                />
              </div>
            </div>

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
              <label className="text-[10px] font-bold uppercase tracking-widest text-otiz-slate ml-4">
                I am a...
              </label>
              <Select required>
                <SelectTrigger className="h-14 rounded-full px-6 border-otiz-gray focus:ring-otiz-purple bg-white text-otiz-black">
                  <SelectValue placeholder="Select Account Type" />
                </SelectTrigger>
                <SelectContent className="rounded-2xl border-otiz-gray shadow-2xl bg-white z-100">
                  <SelectItem
                    value="talent"
                    className="py-3 cursor-pointer focus:bg-otiz-purple/5"
                  >
                    Talent (Professional)
                  </SelectItem>
                  <SelectItem
                    value="employer"
                    className="py-3 cursor-pointer focus:bg-otiz-purple/5"
                  >
                    Employer (Business)
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 pb-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-otiz-slate ml-4">
                Secure Password
              </label>
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
              className="w-full h-14 rounded-full bg-otiz-black hover:bg-otiz-purple text-white font-bold transition-all active:scale-95 group shadow-lg shadow-otiz-purple/10"
            >
              {isLoading ? "Provisioning..." : "Create Account"}
              {!isLoading && (
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              )}
            </Button>
          </form>

          <div className="mt-8 pt-8 border-t border-otiz-gray text-center">
            <p className="text-sm text-otiz-slate font-medium">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-otiz-purple font-black hover:underline"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>

        <p className="text-center mt-8 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          Secure Terminal &copy; 2026 OtizKeeper
        </p>
      </motion.div>
    </div>
  );
}
