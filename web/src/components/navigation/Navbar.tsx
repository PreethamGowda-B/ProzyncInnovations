"use client";
/* src/components/navigation/Navbar.tsx */
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products", hasDropdown: true, children: [
    { label: "SmartERP", href: "/products/smarterp", desc: "Complete business management" },
    { label: "All Products", href: "/products", desc: "View full product catalog" },
  ]},
  { label: "Services", href: "/services", hasDropdown: true, children: [
    { label: "Custom Software", href: "/services", desc: "Tailored development" },
    { label: "ERP Development", href: "/services/erp-development", desc: "Enterprise solutions" },
    { label: "AI Solutions", href: "/services/ai-solutions", desc: "Intelligent automation" },
    { label: "Cloud Migration", href: "/services/cloud-migration", desc: "Scalable infrastructure" },
  ]},
  { label: "About Us", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 w-full z-[200] transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl border-b border-slate-200/70 shadow-md"
            : "bg-white/80 backdrop-blur-sm border-b border-slate-200/40"
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[70px] flex items-center justify-between" ref={dropdownRef}>
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <Image
              src="/prozync-logo.png.png"
              alt="Prozync Innovations"
              width={36}
              height={36}
              className="rounded-lg"
              priority
            />
            <div className="flex flex-col leading-none">
              <span className="text-sm font-black tracking-widest text-text-primary font-heading">PROZYNC</span>
              <span className="text-[9px] tracking-[0.15em] text-text-muted font-medium uppercase">Innovations</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              const dropdownOpen = activeDropdown === link.label;

              return (
                <div key={link.label} className="relative">
                  {link.hasDropdown ? (
                    <button
                      className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        isActive ? "text-text-primary font-semibold" : "text-text-muted hover:text-text-primary"
                      }`}
                      onMouseEnter={() => setActiveDropdown(link.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                      onClick={() => setActiveDropdown(dropdownOpen ? null : link.label)}
                    >
                      {link.label}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center group ${
                        isActive ? "text-text-primary font-semibold" : "text-text-muted hover:text-text-primary"
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <motion.div
                          className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-accent-primary to-accent-purple rounded-full"
                          layoutId="nav-underline"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                    </Link>
                  )}

                  {/* Dropdown */}
                  {link.hasDropdown && link.children && (
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.97 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 mt-2 w-52 bg-surface-01/95 backdrop-blur-xl border border-slate-200/60 rounded-xl shadow-2xl overflow-hidden"
                          onMouseEnter={() => setActiveDropdown(link.label)}
                          onMouseLeave={() => setActiveDropdown(null)}
                        >
                          {link.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="flex flex-col gap-0.5 px-4 py-3 hover:bg-accent-purple/5 transition-colors group"
                            >
                              <span className="text-sm font-semibold text-text-secondary group-hover:text-accent-purple transition-colors">{child.label}</span>
                              <span className="text-xs text-text-muted">{child.desc}</span>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/pricing#booking"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-glow-purple"
              style={{ background: "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)" }}
            >
              Book a Demo
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <button
              className="lg:hidden p-2 text-text-muted hover:text-text-primary transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-[199] bg-bg-primary/98 backdrop-blur-2xl pt-[70px] flex flex-col"
          >
            <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="flex items-center justify-between py-4 border-b border-slate-200/60 text-lg font-semibold text-text-secondary hover:text-text-primary transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                    <ArrowRight className="w-4 h-4 text-text-muted" />
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="px-6 pb-8">
              <Link
                href="/pricing#booking"
                className="flex items-center justify-center gap-2 w-full py-4 rounded-xl text-base font-bold text-white"
                style={{ background: "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)" }}
                onClick={() => setMobileOpen(false)}
              >
                Book a Demo
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
export default Navbar;
