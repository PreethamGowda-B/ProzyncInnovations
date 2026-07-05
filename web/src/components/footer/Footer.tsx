"use client";
/* src/components/footer/Footer.tsx */
import React from "react";
import Link from "next/link";
import { Mail, Phone, ArrowUpRight } from "lucide-react";
import { COMPANY_INFO } from "../../constants/company";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About Us", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
  { label: "Security", href: "/security" },
  { label: "Accessibility", href: "/accessibility" },
];

export function Footer() {
  return (
    <footer
      className="w-full border-t border-slate-200/60 mt-auto"
      style={{ background: "linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%)" }}
    >
      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="flex flex-col gap-5 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 w-fit">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center shadow-sm"
                style={{ background: "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)" }}
              >
                <span className="text-base font-black text-white">P</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-sm font-black tracking-widest text-slate-800">PROZYNC</span>
                <span className="text-[9px] tracking-[0.15em] text-slate-400 font-medium uppercase">Innovations</span>
              </div>
            </Link>
            <p className="text-xs text-slate-500 leading-relaxed max-w-[220px]">
              Engineering premium digital products — websites, web apps, and enterprise software for businesses that demand excellence.
            </p>
            {/* Contact details */}
            <div className="flex flex-col gap-2.5 mt-1">
              <a
                href={`mailto:${COMPANY_INFO.email.contact}`}
                className="flex items-center gap-2 text-xs text-slate-500 hover:text-violet-600 transition-colors group w-fit"
              >
                <Mail className="w-3.5 h-3.5 text-violet-500 shrink-0" />
                <span className="font-medium group-hover:underline">{COMPANY_INFO.email.contact}</span>
              </a>
              <a
                href={`tel:${COMPANY_INFO.phone.primary.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-xs text-slate-500 hover:text-blue-600 transition-colors group w-fit"
              >
                <Phone className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                <span className="font-medium group-hover:underline">{COMPANY_INFO.phone.primary}</span>
              </a>
              <a
                href={`tel:${COMPANY_INFO.phone.secondary.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-xs text-slate-500 hover:text-blue-600 transition-colors group w-fit"
              >
                <Phone className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                <span className="font-medium group-hover:underline">{COMPANY_INFO.phone.secondary}</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-black text-slate-700 uppercase tracking-[0.15em]">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-xs text-slate-500 hover:text-violet-600 transition-colors font-medium w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-black text-slate-700 uppercase tracking-[0.15em]">Services</h4>
            <div className="flex flex-col gap-2">
              {[
                "Custom Software Development",
                "Business Website Design",
                "Web Application Development",
                "ERP Systems",
                "AI Integration",
                "Cloud Solutions",
                "UI/UX Design",
                "API Development",
              ].map((s) => (
                <span key={s} className="text-xs text-slate-500 font-medium">{s}</span>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-black text-slate-700 uppercase tracking-[0.15em]">Get In Touch</h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              Have a project in mind? Let's build something exceptional together.
            </p>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hi!%20I'm%20interested%20in%20Prozync%20Innovations%20services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white transition-all duration-200 hover:scale-[1.03] w-fit"
              style={{ background: "#25d366" }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.45 5.426.002 9.84-4.394 9.843-9.842.002-2.638-1.017-5.114-2.87-6.97C16.388 1.939 13.92 1.917 11.28 1.917 5.858 1.917 1.445 6.315 1.442 11.765c-.001 1.558.423 3.082 1.233 4.417l-.98 3.58 3.69-.97zM17.433 14.19c-.3-.15-1.782-.88-2.057-.98-.275-.1-.475-.15-.675.15-.2.3-.775.98-.95 1.18-.175.2-.35.225-.65.075-.3-.15-1.266-.467-2.41-1.485-.89-.794-1.49-1.775-1.665-2.075-.175-.3-.02-.463.13-.61.135-.133.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.589-.48-.51-.66-.52-.17-.01-.365-.01-.56-.01-.195 0-.51.075-.775.362-.265.288-1.013.99-1.013 2.413 0 1.422 1.037 2.795 1.18 2.99.145.195 2.036 3.11 4.93 4.36.688.297 1.227.473 1.646.606.693.22 1.324.19 1.823.115.556-.08 1.782-.73 2.032-1.435.25-.705.25-1.31.175-1.435-.075-.125-.275-.2-.575-.35z" />
              </svg>
              Chat on WhatsApp
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-violet-600 hover:text-violet-700 transition-colors group w-fit"
            >
              Send us an email
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            {/* Hours */}
            <div className="mt-2 border-t border-slate-200/60 pt-4 flex flex-col gap-1">
              <p className="text-[10px] font-bold text-slate-600 uppercase tracking-wider">Business Hours</p>
              <p className="text-[11px] text-slate-500">{COMPANY_INFO.hours.weekday}</p>
              <p className="text-[11px] text-slate-500">{COMPANY_INFO.hours.saturday}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-slate-400">
            © {new Date().getFullYear()} Prozync Innovations. All rights reserved.
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[11px] text-slate-400 hover:text-slate-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
