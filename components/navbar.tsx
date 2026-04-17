"use client";

import * as React from "react";
import Link from "next/link";
import { SOLUTIONS } from "@/config/navigation";
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
import { Menu, X, ChevronRight } from "lucide-react";

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
            ? "bg-white/90 backdrop-blur-xl border-b border-otiz-gray/40 shadow-[0_2px_24px_0_rgba(80,40,160,0.07)]"
            : "bg-transparent border-b border-transparent",
        ].join(" ")}
      >
        <div className="container mx-auto flex h-18 items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-1 group shrink-0">
            <span
              className={[
                "text-[22px] font-extrabold tracking-tighter transition-colors duration-300",
                scrolled ? "text-otiz-black" : "text-otiz-black",
              ].join(" ")}
            >
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
                  <NavigationMenuTrigger
                    className={[
                      "font-semibold text-[14px] px-4 bg-transparent hover:bg-otiz-purple/5 transition-colors duration-200",
                      scrolled ? "text-otiz-black" : "text-otiz-black",
                    ].join(" ")}
                  >
                    Solutions
                  </NavigationMenuTrigger>

                  <NavigationMenuContent>
                    <ul className="grid gap-1 p-3 md:w-130 md:grid-cols-2 rounded-xl shadow-[0_8px_40px_rgba(80,40,160,0.13)] border border-otiz-gray/60 bg-white">
                      {SOLUTIONS.map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink>
                            <Link
                              href={item.href}
                              className={[
                                "group/item flex flex-col gap-0.5 select-none rounded-lg p-3 no-underline outline-none",
                                "border border-transparent",
                                "hover:bg-otiz-purple/5 hover:border-otiz-purple/20",
                                "transition-all duration-200",
                              ].join(" ")}
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-[13px] font-bold text-otiz-black group-hover/item:text-otiz-purple transition-colors duration-200">
                                  {item.title}
                                </span>
                                <ChevronRight className="h-3.5 w-3.5 text-otiz-purple/0 group-hover/item:text-otiz-purple/70 transition-all duration-200 -translate-x-1 group-hover/item:translate-x-0" />
                              </div>
                              <p className="text-[12px] leading-snug text-otiz-slate">
                                {item.description}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}

                      <li className="col-span-2 mt-1 pt-2 border-t border-otiz-gray/50">
                        <Link
                          href="/services"
                          className="flex items-center gap-1.5 px-3 py-1.5 text-[12px] font-semibold text-otiz-purple hover:text-otiz-deep transition-colors duration-200 group/all"
                        >
                          View all solutions
                          <ChevronRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/all:translate-x-0.5" />
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
                        "font-semibold text-[14px] px-4 bg-transparent hover:bg-otiz-purple/5 transition-colors duration-200",
                        scrolled ? "text-otiz-black" : "text-otiz-black",
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
                        "font-semibold text-[14px] px-4 bg-transparent hover:bg-otiz-purple/5 transition-colors duration-200",
                        scrolled ? "text-otiz-black" : "text-otiz-black",
                      ].join(" ")}
                    >
                      Insights
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          <div className="hidden lg:flex items-center gap-5">
            <Link
              href="/oconnect"
              className="text-[13px] font-semibold text-otiz-slate hover:text-otiz-purple transition-colors duration-200 relative group/oconnect"
            >
              O&apos;Connect™
              <span className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] bg-otiz-purple rounded-full transition-all duration-300 group-hover/oconnect:w-full" />
            </Link>

            <Button
              className={[
                "relative overflow-hidden font-bold text-[13px] px-6 h-10 rounded-lg text-white",
                "bg-otiz-purple hover:bg-otiz-deep",
                "shadow-[0_2px_12px_rgba(109,40,217,0.30)]",
                "hover:shadow-[0_4px_20px_rgba(109,40,217,0.45)]",
                "transition-all duration-300 active:scale-[0.97]",
              ].join(" ")}
            >
              Book a Consultation
            </Button>
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-otiz-gray/60 transition-colors duration-200 text-otiz-black"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        <div
          className={[
            "absolute bottom-0 left-0 h-0.5 bg-linear-to-r from-otiz-purple to-purple-400",
            "transition-opacity duration-500",
            scrolled ? "opacity-100" : "opacity-0",
          ].join(" ")}
        />
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
          "fixed top-18 left-0 right-0 z-40 bg-white border-b border-otiz-gray/50",
          "shadow-[0_8px_32px_rgba(80,40,160,0.10)]",
          "transition-all duration-350 ease-out lg:hidden",
          "overflow-hidden",
          mobileOpen
            ? "max-h-[calc(100vh-72px)] opacity-100"
            : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <div className="container mx-auto px-6 py-5 flex flex-col gap-1">
          <div>
            <button
              onClick={() => setMobileSolutionsOpen((v) => !v)}
              className="flex items-center justify-between w-full py-3 text-[15px] font-semibold text-otiz-black"
            >
              Solutions
              <ChevronRight
                className={[
                  "h-4 w-4 text-otiz-purple transition-transform duration-300",
                  mobileSolutionsOpen ? "rotate-90" : "",
                ].join(" ")}
              />
            </button>
            <div
              className={[
                "overflow-hidden transition-all duration-300",
                mobileSolutionsOpen
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0",
              ].join(" ")}
            >
              <ul className="pl-3 pb-2 flex flex-col gap-0.5 border-l-2 border-otiz-purple/30 ml-1">
                {SOLUTIONS.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex flex-col py-2 px-3 rounded-lg hover:bg-otiz-purple/5 transition-colors duration-150"
                    >
                      <span className="text-[13px] font-bold text-otiz-black">
                        {item.title}
                      </span>
                      <span className="text-[12px] text-otiz-slate">
                        {item.description}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {[
            { label: "About", href: "/about" },
            { label: "Insights", href: "/insights" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="py-3 text-[15px] font-semibold text-otiz-black border-t border-otiz-gray/40 hover:text-otiz-purple transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}

          <div className="border-t border-otiz-gray/40 pt-4 pb-2 flex flex-col gap-3 mt-1">
            <Link
              href="/oconnect"
              onClick={() => setMobileOpen(false)}
              className="text-[14px] font-semibold text-otiz-slate hover:text-otiz-purple transition-colors duration-200"
            >
              Access O&apos;Connect™
            </Link>
            <Button
              className="w-full font-bold text-[14px] h-11 rounded-lg text-white bg-otiz-purple hover:bg-otiz-deep shadow-[0_2px_12px_rgba(109,40,217,0.30)] transition-all duration-300 active:scale-[0.97]"
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
