"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X, ChevronRight, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { SOLUTIONS } from "@/config/navigation";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={[
          "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ease-out",
          scrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-otiz-gray/40 shadow-[0_2px_24px_0_rgba(80,40,160,0.07)]"
            : "bg-transparent border-b border-transparent",
        ].join(" ")}
      >
        <div className="container mx-auto flex h-18 items-center justify-between px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 group shrink-0">
            <span className="text-[22px] font-extrabold tracking-tighter text-otiz-black">
              OTIZ
              <span className="text-otiz-purple relative inline-block">
                KEEPER
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-otiz-purple rounded-full transition-all duration-500 group-hover:w-full opacity-70" />
              </span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center">
            <NavigationMenu>
              <NavigationMenuList className="gap-0">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-semibold text-[14px] px-4 bg-transparent hover:bg-otiz-purple/5 transition-colors">
                    Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-1 p-3 md:w-125 md:grid-cols-2 rounded-4xl shadow-[0_8px_40px_rgba(80,40,160,0.13)] border border-otiz-gray/60 bg-white overflow-hidden">
                      {SOLUTIONS.map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink>
                            <Link
                              href={item.href}
                              className="group/item flex flex-col gap-0.5 select-none rounded-2xl p-3 no-underline outline-none border border-transparent hover:bg-otiz-purple/5 hover:border-otiz-purple/20 transition-all"
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-[13px] font-bold text-otiz-black group-hover/item:text-otiz-purple">
                                  {item.title}
                                </span>
                                <ChevronRight className="h-3.5 w-3.5 text-otiz-purple opacity-0 group-hover/item:opacity-100 transition-all -translate-x-1 group-hover/item:translate-x-0" />
                              </div>
                              <p className="text-[12px] leading-snug text-otiz-slate">
                                {item.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}

                      <li className="col-span-2 mt-1 pt-2 border-t border-otiz-gray/50 px-2 pb-1">
                        <Link
                          href="/services"
                          className="flex items-center gap-1.5 px-3 py-1.5 text-[12px] font-bold text-otiz-purple hover:text-otiz-deep transition-colors group/all"
                        >
                          View all services
                          <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover/all:translate-x-0.5" />
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={[
                        navigationMenuTriggerStyle(),
                        "font-semibold text-[14px] bg-transparent hover:bg-otiz-purple/5 transition-colors",
                      ].join(" ")}
                    >
                      About
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/insights" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={[
                        navigationMenuTriggerStyle(),
                        "font-semibold text-[14px] bg-transparent hover:bg-otiz-purple/5 transition-colors",
                      ].join(" ")}
                    >
                      Insights
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={[
                        navigationMenuTriggerStyle(),
                        "font-semibold text-[14px] bg-transparent hover:bg-otiz-purple/5 transition-colors",
                      ].join(" ")}
                    >
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            <Link
              href="/login"
              className="text-[13px] font-bold text-otiz-black hover:text-otiz-purple transition-all flex items-center gap-2 group/login"
            >
              <div className="w-8 h-8 rounded-full bg-otiz-gray flex items-center justify-center group-hover/login:bg-otiz-purple/10 transition-colors">
                <User className="w-4 h-4 text-otiz-purple" />
              </div>
              Login
            </Link>

            <Button className="font-bold text-[13px] px-8 h-11 rounded-full text-white bg-otiz-purple hover:bg-otiz-deep shadow-[0_4px_14px_rgba(109,40,217,0.30)] hover:shadow-[0_6px_20px_rgba(109,40,217,0.45)] transition-all active:scale-[0.97]">
              <Link href="/contact">Book a Consultation</Link>
            </Button>
          </div>

          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-otiz-gray transition-colors text-otiz-black"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </header>

      <div
        className={[
          "fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        ].join(" ")}
        onClick={() => setMobileOpen(false)}
      />

      <div
        className={[
          "fixed top-18 left-0 right-0 z-40 bg-white border-b border-otiz-gray/50 shadow-2xl transition-all duration-350 ease-out lg:hidden overflow-hidden",
          mobileOpen
            ? "max-h-[calc(100vh-72px)] opacity-100"
            : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <div className="container mx-auto px-6 py-8 flex flex-col gap-2">
          <div>
            <button
              onClick={() => setMobileSolutionsOpen((v) => !v)}
              className="flex items-center justify-between w-full py-3 text-[15px] font-bold text-otiz-black"
            >
              Solutions
              <ChevronRight
                className={[
                  "h-4 w-4 text-otiz-purple transition-transform",
                  mobileSolutionsOpen ? "rotate-90" : "",
                ].join(" ")}
              />
            </button>
            <div
              className={[
                "overflow-hidden transition-all duration-300",
                mobileSolutionsOpen ? "max-h-96" : "max-h-0",
              ].join(" ")}
            >
              <ul className="pl-4 pb-4 border-l-2 border-otiz-purple/20 ml-1 space-y-1">
                {SOLUTIONS.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-2 text-[14px] font-medium text-otiz-slate hover:text-otiz-purple"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/services"
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-[14px] font-bold text-otiz-purple"
                  >
                    View All Services
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <Link
            href="/about"
            onClick={() => setMobileOpen(false)}
            className="py-3 text-[15px] font-bold text-otiz-black border-t border-otiz-gray/40"
          >
            About
          </Link>
          <Link
            href="/insights"
            onClick={() => setMobileOpen(false)}
            className="py-3 text-[15px] font-bold text-otiz-black border-t border-otiz-gray/40"
          >
            Insights
          </Link>

          <div className="border-t border-otiz-gray/40 pt-8 flex flex-col gap-4 mt-2">
            <Link
              href="/login"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-3 py-4 rounded-full bg-otiz-gray text-[14px] font-black text-otiz-black"
            >
              <User className="w-4 h-4 text-otiz-purple" />
              Login to Terminal
            </Link>
            <Button
              className="w-full font-bold text-[14px] h-14 rounded-full text-white bg-otiz-purple hover:bg-otiz-deep shadow-lg shadow-otiz-purple/20"
              onClick={() => setMobileOpen(false)}
            >
              Book a Consultation
            </Button>
          </div>
        </div>
      </div>

      <div className="h-18" />
    </>
  );
}
