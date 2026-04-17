import {
  LayoutDashboard,
  UserCircle,
  Briefcase,
  Users,
  Settings,
  Zap,
  CreditCard,
} from "lucide-react";

export const DASHBOARD_NAV = {
  talent: [
    { label: "Overview", href: "/talent/dashboard", icon: LayoutDashboard },
    { label: "Performance Profile", href: "/talent/profile", icon: UserCircle },
    { label: "Applications", href: "/talent/applications", icon: Briefcase },
    { label: "O’Connect™", href: "/talent/oconnect", icon: Zap },
    { label: "Settings", href: "/talent/settings", icon: Settings },
  ],
  employer: [
    { label: "Overview", href: "/employer/dashboard", icon: LayoutDashboard },
    {
      label: "Workforce Architecture",
      href: "/employer/structure",
      icon: Users,
    },
    { label: "Hires & Performance", href: "/employer/hires", icon: Zap },
    { label: "Billing", href: "/employer/billing", icon: CreditCard },
    { label: "Settings", href: "/employer/settings", icon: Settings },
  ],
};
