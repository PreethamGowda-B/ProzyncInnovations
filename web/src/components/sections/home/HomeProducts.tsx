"use client";
/* src/components/sections/home/HomeProducts.tsx */
import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PRODUCTS } from "../../../constants/products";

// Colorful 3D cube icon using SVG - each product gets unique colors
const cubeColors: Record<string, { top: string; right: string; left: string }> = {
  smarterp:  { top: "#7c3aed", right: "#5b21b6", left: "#6d28d9" },
  crm:       { top: "#2563eb", right: "#1d4ed8", left: "#1e40af" },
  webapps:   { top: "#059669", right: "#047857", left: "#065f46" },
  mobile:    { top: "#ea580c", right: "#c2410c", left: "#9a3412" },
  cloud:     { top: "#0ea5e9", right: "#0284c7", left: "#0369a1" },
  api:       { top: "#7c3aed", right: "#6d28d9", left: "#5b21b6" },
  hrms:      { top: "#db2777", right: "#be185d", left: "#9d174d" },
  inventory: { top: "#d97706", right: "#b45309", left: "#92400e" },
};

function CubeIcon({ colors }: { colors: { top: string; right: string; left: string } }) {
  return (
    <svg width="72" height="72" viewBox="0 0 100 100" fill="none">
      <defs>
        <filter id={`glow-${colors.top.slice(1)}`}>
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      {/* Top face */}
      <polygon points="50,8 92,30 50,52 8,30" fill={colors.top} filter={`url(#glow-${colors.top.slice(1)})`} />
      {/* Right face */}
      <polygon points="92,30 92,72 50,92 50,52" fill={colors.right} />
      {/* Left face */}
      <polygon points="8,30 50,52 50,92 8,72" fill={colors.left} />
      {/* Top shine */}
      <polygon points="50,8 72,19 50,30 28,19" fill="white" opacity="0.25" />
      {/* Edge lines */}
      <line x1="50" y1="52" x2="50" y2="92" stroke="white" strokeOpacity="0.1" strokeWidth="0.5" />
    </svg>
  );
}

// Derive display products with extra entries for missing ones
const displayProducts = [
  { id: "smarterp",  name: "SmartERP", description: "Complete business management solution to run your entire organization.", href: "/products/smarterp" },
  { id: "crm",       name: "Custom Software Development", description: "Tailored software solutions built to match your unique business requirements.", href: "/services" },
  { id: "webapps",   name: "Web Applications", description: "Modern, responsive & high performance web applications for your business.", href: "/services" },
  { id: "mobile",    name: "Mobile Applications", description: "Engaging & scalable mobile apps for Android and iOS platforms.", href: "/services" },
  { id: "cloud",     name: "Cloud Solutions", description: "Secure, scalable and cost-effective cloud solutions for your infrastructure.", href: "/services" },
  { id: "api",       name: "API Integrations", description: "Seamless integrations with third-party APIs and custom systems.", href: "/services" },
];

export function HomeProducts() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-20 lg:py-28"
      style={{ background: "#f8f9ff" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p
            className="text-xs font-bold tracking-[0.25em] uppercase mb-3"
            style={{ color: "#7c3aed" }}
          >
            Our Products & Services
          </p>
          <h2
            className="text-3xl lg:text-4xl font-black font-heading mb-4"
            style={{ color: "#1e293b" }}
          >
            Powerful Solutions for Modern Businesses
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-base leading-relaxed">
            From ERP systems to custom software, we provide end-to-end solutions designed to streamline your business operations.
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayProducts.map((product, i) => {
            const colors = cubeColors[product.id] ?? cubeColors.smarterp;
            return (
              <motion.div
                key={product.id}
                className="group flex flex-col gap-4 p-6 rounded-2xl bg-white border transition-all duration-300 cursor-pointer"
                style={{
                  borderColor: "rgba(0,0,0,0.06)",
                  boxShadow: "0 2px 20px rgba(0,0,0,0.06)",
                }}
                whileHover={{
                  y: -6,
                  boxShadow: `0 20px 50px rgba(124, 58, 237, 0.12)`,
                  borderColor: "rgba(124, 58, 237, 0.2)",
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                {/* Cube Icon */}
                <motion.div
                  className="w-18 h-18"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <CubeIcon colors={colors} />
                </motion.div>

                {/* Content */}
                <div className="flex flex-col gap-2 flex-1">
                  <h3
                    className="text-base font-bold group-hover:transition-colors duration-200"
                    style={{ color: "#1e293b" }}
                  >
                    <span className="group-hover:text-accent-purple transition-colors duration-200" style={{ color: colors.top }}>
                      {product.name}
                    </span>
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>
                    {product.description}
                  </p>
                </div>

                {/* Learn More */}
                <Link
                  href={product.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-200"
                  style={{ color: colors.top }}
                >
                  Learn More
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default HomeProducts;
