import {
  Users,
  UserPlus,
  ShieldCheck,
  Activity,
  ArrowUpRight,
  MoreHorizontal,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function EmployerDashboard() {
  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-otiz-black tracking-tighter">
            Workforce <span className="text-otiz-purple">Command</span>
          </h1>
          <p className="text-otiz-slate mt-2 font-medium">
            Managing 8 active roles across 2 structural divisions.
          </p>
        </div>
        <Button className="rounded-full bg-otiz-black hover:bg-otiz-purple px-8 h-12 font-bold shadow-lg transition-all group">
          <Plus className="w-4 h-4 mr-2 group-hover:rotate-90 transition-transform" />
          Architect New Role
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          {
            label: "Active Staff",
            value: "24",
            icon: Users,
            color: "text-blue-600",
          },
          {
            label: "Open Mandates",
            value: "05",
            icon: UserPlus,
            color: "text-otiz-purple",
          },
          {
            label: "SLA Compliance",
            value: "98%",
            icon: ShieldCheck,
            color: "text-emerald-600",
          },
          {
            label: "Avg Performance",
            value: "8.4",
            icon: Activity,
            color: "text-amber-600",
          },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-white p-6 rounded-4xl border border-otiz-gray shadow-sm"
          >
            <div
              className={`w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center mb-4 ${stat.color}`}
            >
              <stat.icon className="w-5 h-5" />
            </div>
            <p className="text-2xl font-black text-otiz-black">{stat.value}</p>
            <p className="text-[10px] font-bold text-otiz-slate uppercase tracking-widest mt-1">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Active Recruitment Mandates */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between px-2">
            <h3 className="font-black text-otiz-black uppercase text-xs tracking-[0.2em]">
              Active Recruitment Mandates
            </h3>
            <button className="text-[10px] font-bold text-otiz-purple uppercase tracking-widest hover:underline text-right">
              Review All
            </button>
          </div>

          <div className="bg-white rounded-[2.5rem] border border-otiz-gray overflow-hidden">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-otiz-gray bg-gray-50/50">
                  <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-otiz-slate">
                    Role Architecture
                  </th>
                  <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-otiz-slate">
                    Matches
                  </th>
                  <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-otiz-slate">
                    Status
                  </th>
                  <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-otiz-slate text-right">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-otiz-gray">
                {[
                  {
                    role: "Executive Assistant",
                    matches: 14,
                    status: "Matching",
                  },
                  {
                    role: "Operations Lead",
                    matches: 8,
                    status: "Shortlisted",
                  },
                  {
                    role: "Household Manager",
                    matches: 21,
                    status: "Interviewing",
                  },
                ].map((item) => (
                  <tr
                    key={item.role}
                    className="group hover:bg-otiz-gray/5 transition-colors cursor-pointer"
                  >
                    <td className="px-8 py-6">
                      <p className="font-bold text-otiz-black group-hover:text-otiz-purple transition-colors">
                        {item.role}
                      </p>
                      <p className="text-[10px] text-otiz-slate font-medium">
                        Ref: OK-2026-00{item.matches}
                      </p>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex -space-x-2">
                        {[1, 2, 3].map((i) => (
                          <div
                            key={i}
                            className="w-8 h-8 rounded-full border-2 border-white bg-otiz-gray flex items-center justify-center text-[10px] font-bold"
                          >
                            {item.matches + i}
                          </div>
                        ))}
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <span className="px-3 py-1 rounded-full bg-otiz-purple/10 text-otiz-purple text-[10px] font-black uppercase tracking-widest">
                        {item.status}
                      </span>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <button
                        type="button"
                        title="button"
                        className="p-2 hover:bg-white rounded-full transition-colors border border-transparent hover:border-otiz-gray"
                      >
                        <MoreHorizontal className="w-4 h-4 text-otiz-slate" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="font-black text-otiz-black uppercase text-xs tracking-[0.2em] px-2">
            Workforce Health
          </h3>
          <div className="bg-white p-8 rounded-[2.5rem] border border-otiz-gray space-y-8">
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <p className="text-[10px] font-black uppercase tracking-widest text-otiz-slate">
                  Overall Performance ROI
                </p>
                <p className="text-lg font-black text-otiz-black">88%</p>
              </div>
              <div className="h-2 w-full bg-otiz-gray rounded-full overflow-hidden">
                <div className="h-full bg-otiz-purple w-[88%]" />
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-otiz-black text-white relative overflow-hidden">
              <div className="relative z-10">
                <p className="text-[10px] font-bold text-otiz-purple uppercase tracking-widest mb-2">
                  Architect&apos;s Tip
                </p>
                <h4 className="text-sm font-bold leading-relaxed">
                  3 Domestic staff members are due for structural verification.
                </h4>
                <button className="mt-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-otiz-purple hover:text-white transition-colors">
                  Review Now <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>
              <ShieldCheck className="absolute -bottom-4 -right-4 w-24 h-24 text-white/5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
