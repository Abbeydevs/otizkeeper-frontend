"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DASHBOARD_NAV } from "@/config/dashboard";
import { cn } from "@/lib/utils";
import { LogOut } from "lucide-react";

interface SidebarProps {
  role: "talent" | "employer";
}

export function Sidebar({ role }: SidebarProps) {
  const pathname = usePathname();
  const navItems = DASHBOARD_NAV[role];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-otiz-black text-white flex flex-col border-r border-white/5 z-50">
      <div className="p-8">
        <Link href="/" className="text-xl font-black tracking-tighter">
          OTIZ<span className="text-otiz-purple">KEEPER</span>
        </Link>
        <div className="mt-2 text-[10px] font-bold text-otiz-purple uppercase tracking-[0.2em]">
          {role} Intelligence
        </div>
      </div>

      <nav className="grow px-4 space-y-2 mt-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-bold transition-all duration-300 group",
                isActive
                  ? "bg-otiz-purple text-white shadow-lg shadow-otiz-purple/20"
                  : "text-slate-400 hover:bg-white/5 hover:text-white",
              )}
            >
              <item.icon
                className={cn(
                  "w-5 h-5",
                  isActive
                    ? "text-white"
                    : "text-slate-500 group-hover:text-otiz-purple",
                )}
              />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-white/5">
        <button
          onClick={() => console.log("Logout Logic")}
          className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-bold text-slate-400 hover:bg-red-500/10 hover:text-red-500 transition-all"
        >
          <LogOut className="w-5 h-5" />
          Sign Out
        </button>
      </div>
    </aside>
  );
}
