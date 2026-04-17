import { Zap, Target, TrendingUp, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TalentDashboard() {
  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-otiz-black tracking-tighter">
            Welcome back, <span className="text-otiz-purple">Biodun</span>
          </h1>
          <p className="text-otiz-slate mt-2 font-medium">
            Your performance architecture is currently 82% optimized.
          </p>
        </div>
        <Button className="rounded-full bg-otiz-purple hover:bg-otiz-deep px-8 h-12 font-bold shadow-lg shadow-otiz-purple/20">
          Update Profile Intelligence
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            label: "Active Matches",
            value: "12",
            icon: Target,
            color: "text-blue-600",
          },
          {
            label: "O’Connect™ Score",
            value: "840",
            icon: Zap,
            color: "text-otiz-purple",
          },
          {
            label: "Profile Views",
            value: "124",
            icon: TrendingUp,
            color: "text-emerald-600",
          },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-white p-8 rounded-4xl border border-otiz-gray shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-2xl bg-gray-50 ${stat.color}`}>
                <stat.icon className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-otiz-slate">
                Live
              </span>
            </div>
            <p className="text-3xl font-black text-otiz-black">{stat.value}</p>
            <p className="text-xs font-bold text-otiz-slate uppercase tracking-widest mt-1">
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between px-2">
            <h3 className="font-black text-otiz-black uppercase text-xs tracking-[0.2em]">
              Active Matching Pipeline
            </h3>
            <button className="text-[10px] font-bold text-otiz-purple uppercase tracking-widest hover:underline">
              View All
            </button>
          </div>

          <div className="bg-white rounded-[2.5rem] border border-otiz-gray overflow-hidden">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="p-6 flex items-center justify-between border-b border-otiz-gray last:border-0 hover:bg-otiz-gray/10 transition-colors group cursor-pointer"
              >
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-otiz-purple/10 flex items-center justify-center font-black text-otiz-purple">
                    {i === 1 ? "SF" : i === 2 ? "GH" : "TK"}
                  </div>
                  <div>
                    <h4 className="font-bold text-otiz-black group-hover:text-otiz-purple transition-colors">
                      {i === 1
                        ? "Senior Fintech Architect"
                        : i === 2
                          ? "Growth Head"
                          : "Technical Lead"}
                    </h4>
                    <p className="text-xs text-otiz-slate font-medium">
                      Matching Probability: {95 - i * 5}%
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-black uppercase tracking-widest">
                    In Review
                  </span>
                  <ChevronRight className="w-4 h-4 text-otiz-gray group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="font-black text-otiz-black uppercase text-xs tracking-[0.2em] px-2">
            Structural Brief
          </h3>
          <div className="bg-otiz-black text-white p-8 rounded-[2.5rem] relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Zap className="w-20 h-20" />
            </div>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-otiz-purple mb-4">
              Optimization Alert
            </p>
            <h4 className="text-xl font-bold leading-tight mb-6">
              Your &quot;Global Mobility&quot; score can be increased by 15
              points.
            </h4>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-sm text-slate-300">
                <div className="w-1.5 h-1.5 rounded-full bg-otiz-purple" />
                Add certification verification
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-300">
                <div className="w-1.5 h-1.5 rounded-full bg-otiz-purple" />
                Update recent project ROI
              </li>
            </ul>
            <Button className="w-full rounded-full bg-white text-otiz-black font-black text-xs uppercase tracking-widest hover:bg-otiz-purple hover:text-white transition-all">
              Optimize Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
