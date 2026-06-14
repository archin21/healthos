import { Link, useLocation } from "wouter";
import { LayoutDashboard, FileText, TrendingUp, Brain, Pill, User } from "lucide-react";
import { cn } from "@/lib/utils";
import React from "react";

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "My Reports", href: "/report/r1", icon: FileText },
  { name: "Trends", href: "/trends", icon: TrendingUp },
  { name: "Mental Health", href: "/mental-health", icon: Brain },
  { name: "Medicines", href: "/medicines", icon: Pill },
  { name: "Profile", href: "/profile", icon: User },
];

export function AppLayout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  return (
    <div className="flex h-screen bg-slate-50">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-64 flex-col bg-white border-r border-slate-200">
        <div className="p-6">
          <Link href="/dashboard" className="flex items-center gap-2 font-bold text-xl text-slate-900">
            <div className="w-8 h-8 rounded-lg bg-sky-500 flex items-center justify-center text-white">H</div>
            HealthOS
          </Link>
        </div>
        <nav className="flex-1 px-4 space-y-1">
          {navItems.map((item) => {
            const isActive = location === item.href || (location.startsWith("/report") && item.href.startsWith("/report"));
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors",
                  isActive
                    ? "bg-sky-50 text-sky-700"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                )}
              >
                <Icon className={cn("w-5 h-5", isActive ? "text-sky-600" : "text-slate-400")} />
                {item.name}
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-slate-200">
          <div className="flex items-center gap-3 px-3 py-2">
            <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-medium text-slate-600">
              RO
            </div>
            <div>
              <div className="text-sm font-medium text-slate-900">Ranjeet Oak</div>
              <div className="text-xs text-slate-500">Free Plan</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto pb-16 md:pb-0">
        {children}
      </main>

      {/* Mobile Bottom Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 flex justify-around p-2 z-50">
        {navItems.slice(0, 5).map((item) => {
          const isActive = location === item.href || (location.startsWith("/report") && item.href.startsWith("/report"));
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center gap-1 p-2 rounded-xl text-[10px] font-medium",
                isActive ? "text-sky-600" : "text-slate-500"
              )}
            >
              <Icon className="w-5 h-5" />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
