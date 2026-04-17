import { Sidebar } from "@/components/dashboard/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userRole = "talent";

  return (
    <div className="flex min-h-screen bg-otiz-gray/20">
      <Sidebar role={userRole} />

      <main className="grow ml-64 min-h-screen">
        <header className="h-20 border-b border-otiz-gray bg-white/50 backdrop-blur-md sticky top-0 z-40 px-8 flex items-center justify-between">
          <h2 className="text-sm font-bold uppercase tracking-widest text-otiz-slate">
            Performance Intelligence Terminal
          </h2>
          <div className="w-10 h-10 rounded-full bg-otiz-purple/10 flex items-center justify-center border border-otiz-purple/20">
            <span className="text-xs font-black text-otiz-purple">OK</span>
          </div>
        </header>

        <div className="p-8 max-w-7xl mx-auto">{children}</div>
      </main>
    </div>
  );
}
