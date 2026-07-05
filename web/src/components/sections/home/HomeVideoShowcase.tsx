"use client";
/* src/components/sections/home/HomeVideoShowcase.tsx */
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart2, Users, ShoppingCart, TrendingUp, Package,
  DollarSign, Bell, Settings, ArrowUpRight, ArrowDownRight,
  CheckCircle, Clock, AlertCircle
} from "lucide-react";
import { Container } from "../../layout/Container";
import { Section } from "../../layout/Section";
import { FadeUp } from "../../animations/FadeUp";

// ── Live counter hook ───────────────────────────────────────────────────────
function useCounter(end: number, duration: number = 1500, start: boolean = true) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setValue(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, start]);
  return value;
}

// ── Tab modules ─────────────────────────────────────────────────────────────
const modules = [
  { id: "dashboard", label: "Dashboard", icon: BarChart2 },
  { id: "inventory", label: "Inventory", icon: Package },
  { id: "payroll", label: "Payroll", icon: DollarSign },
  { id: "crm", label: "CRM", icon: Users },
];

// ── Bar chart data ───────────────────────────────────────────────────────────
const chartBars = [40, 65, 45, 80, 60, 90, 70, 85, 55, 95, 75, 100];
const months = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

const recentOrders = [
  { id: "#4521", customer: "Ravi Enterprises", amount: "₹45,200", status: "completed" },
  { id: "#4520", customer: "BuildX Corp", amount: "₹18,750", status: "processing" },
  { id: "#4519", customer: "NextGen Ltd", amount: "₹92,100", status: "completed" },
  { id: "#4518", customer: "SoftGrid Inc", amount: "₹7,450", status: "pending" },
];

const statusIcon: Record<string, React.ReactNode> = {
  completed: <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />,
  processing: <Clock className="w-3.5 h-3.5 text-blue-500" />,
  pending: <AlertCircle className="w-3.5 h-3.5 text-amber-500" />,
};
const statusColor: Record<string, string> = {
  completed: "text-emerald-600 bg-emerald-50",
  processing: "text-blue-600 bg-blue-50",
  pending: "text-amber-600 bg-amber-50",
};

// ── Dashboard panel ──────────────────────────────────────────────────────────
function DashboardPanel({ animate }: { animate: boolean }) {
  const revenue = useCounter(24583000, 1800, animate);
  const orders  = useCounter(1247, 1400, animate);
  const users   = useCounter(3892, 1600, animate);
  const growth  = useCounter(24, 1200, animate);

  return (
    <div className="flex flex-col gap-4 h-full">
      {/* Stat cards */}
      <div className="grid grid-cols-2 gap-3">
        {[
          { label: "Revenue", value: `₹${(revenue / 100000).toFixed(1)}L`, change: "+12%", up: true, color: "#7c3aed" },
          { label: "Orders",  value: orders.toLocaleString(),               change: "+8%",  up: true, color: "#2563eb" },
          { label: "Users",   value: users.toLocaleString(),                change: "+24%", up: true, color: "#06b6d4" },
          { label: "Growth",  value: `${growth}%`,                          change: "+5%",  up: true, color: "#10b981" },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm">
            <p className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">{s.label}</p>
            <p className="text-xl font-black text-slate-800 mt-1 font-mono">{s.value}</p>
            <div className="flex items-center gap-1 mt-1">
              {s.up
                ? <ArrowUpRight className="w-3 h-3 text-emerald-500" />
                : <ArrowDownRight className="w-3 h-3 text-red-500" />}
              <span className="text-[10px] font-bold text-emerald-600">{s.change}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Bar chart */}
      <div className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm flex-1">
        <div className="flex items-center justify-between mb-3">
          <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Revenue Overview 2024</p>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-violet-500" />
            <span className="text-[9px] text-slate-400">Monthly</span>
          </div>
        </div>
        <div className="flex items-end gap-1 h-20">
          {chartBars.map((h, i) => (
            <motion.div
              key={i}
              className="flex-1 rounded-sm"
              style={{
                background: i === 11
                  ? "linear-gradient(to top, #7c3aed, #8b5cf6)"
                  : i >= 9
                  ? "linear-gradient(to top, #2563eb60, #2563eb90)"
                  : "linear-gradient(to top, #e2e8f0, #cbd5e1)",
              }}
              initial={{ height: 0 }}
              animate={animate ? { height: `${h}%` } : { height: 0 }}
              transition={{ delay: animate ? 0.3 + i * 0.05 : 0, duration: 0.5 }}
              title={months[i]}
            />
          ))}
        </div>
        <div className="flex justify-between mt-1">
          {months.map((m, i) => (
            <span key={`${m}-${i}`} className="text-[8px] text-slate-300 flex-1 text-center">{m}</span>
          ))}
        </div>
      </div>

      {/* Recent orders */}
      <div className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm">
        <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-2">Recent Orders</p>
        <div className="flex flex-col gap-1.5">
          {recentOrders.map((order) => (
            <div key={order.id} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {statusIcon[order.status]}
                <span className="text-[10px] font-semibold text-slate-700">{order.id}</span>
                <span className="text-[10px] text-slate-400">{order.customer}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold text-slate-700">{order.amount}</span>
                <span className={`text-[9px] font-semibold px-1.5 py-0.5 rounded-full capitalize ${statusColor[order.status]}`}>
                  {order.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Inventory panel ──────────────────────────────────────────────────────────
function InventoryPanel({ animate }: { animate: boolean }) {
  const items = [
    { name: "Office Supplies", stock: 842, max: 1000, color: "#7c3aed" },
    { name: "Electronics", stock: 234, max: 500, color: "#2563eb" },
    { name: "Furniture", stock: 68, max: 200, color: "#06b6d4" },
    { name: "Raw Materials", stock: 1520, max: 2000, color: "#10b981" },
    { name: "Packaging", stock: 45, max: 500, color: "#f59e0b" },
  ];
  return (
    <div className="flex flex-col gap-4 h-full">
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Total SKUs", value: "2,847" },
          { label: "Low Stock", value: "12" },
          { label: "Warehouses", value: "4" },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-xl p-3 border border-slate-100 text-center shadow-sm">
            <p className="text-[10px] text-slate-400 uppercase tracking-wider">{s.label}</p>
            <p className="text-xl font-black text-slate-800 mt-1">{s.value}</p>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-xl p-4 border border-slate-100 shadow-sm flex-1">
        <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-3">Stock Levels</p>
        <div className="flex flex-col gap-3">
          {items.map((item) => (
            <div key={item.name}>
              <div className="flex justify-between mb-1">
                <span className="text-[10px] font-semibold text-slate-600">{item.name}</span>
                <span className="text-[10px] text-slate-400">{item.stock}/{item.max}</span>
              </div>
              <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: item.color }}
                  initial={{ width: 0 }}
                  animate={animate ? { width: `${(item.stock / item.max) * 100}%` } : { width: 0 }}
                  transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Payroll panel ────────────────────────────────────────────────────────────
function PayrollPanel({ animate }: { animate: boolean }) {
  const total = useCounter(4280000, 1800, animate);
  const employees = [
    { name: "Ravi Kumar", role: "Engineering", salary: "₹85,000", status: "paid" },
    { name: "Priya Sharma", role: "Design", salary: "₹72,000", status: "paid" },
    { name: "Amit Patel", role: "Sales", salary: "₹65,000", status: "processing" },
    { name: "Sneha Rao", role: "HR", salary: "₹58,000", status: "paid" },
  ];
  return (
    <div className="flex flex-col gap-4 h-full">
      <div className="bg-gradient-to-r from-violet-500 to-blue-600 rounded-xl p-4 text-white">
        <p className="text-[10px] font-semibold opacity-70 uppercase tracking-wider">Total Payroll — Dec 2024</p>
        <p className="text-3xl font-black mt-1">₹{(total / 100000).toFixed(2)}L</p>
        <div className="flex gap-4 mt-2">
          <div><p className="text-[10px] opacity-60">Employees</p><p className="text-sm font-bold">48</p></div>
          <div><p className="text-[10px] opacity-60">Processed</p><p className="text-sm font-bold">46</p></div>
          <div><p className="text-[10px] opacity-60">Pending</p><p className="text-sm font-bold">2</p></div>
        </div>
      </div>
      <div className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm flex-1">
        <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-2">Employee Payroll</p>
        <div className="flex flex-col gap-2">
          {employees.map((e) => (
            <div key={e.name} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-violet-400 to-blue-500 flex items-center justify-center text-white text-[8px] font-bold">
                  {e.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-slate-700">{e.name}</p>
                  <p className="text-[9px] text-slate-400">{e.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold text-slate-700">{e.salary}</span>
                <span className={`text-[9px] font-semibold px-1.5 py-0.5 rounded-full capitalize ${statusColor[e.status]}`}>
                  {e.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── CRM panel ────────────────────────────────────────────────────────────────
function CRMPanel({ animate }: { animate: boolean }) {
  const leads = useCounter(347, 1400, animate);
  const pipeline = [
    { stage: "New Leads", count: 89, color: "#e2e8f0" },
    { stage: "Contacted", count: 67, color: "#bfdbfe" },
    { stage: "Qualified", count: 48, color: "#a5b4fc" },
    { stage: "Proposal", count: 31, color: "#8b5cf6" },
    { stage: "Won", count: 24, color: "#7c3aed" },
  ];
  return (
    <div className="flex flex-col gap-4 h-full">
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Total Leads", value: leads.toString() },
          { label: "Win Rate", value: "69%" },
          { label: "Avg. Deal", value: "₹1.2L" },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-xl p-3 border border-slate-100 text-center shadow-sm">
            <p className="text-[10px] text-slate-400 uppercase tracking-wider">{s.label}</p>
            <p className="text-xl font-black text-slate-800 mt-1">{s.value}</p>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm flex-1">
        <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-3">Sales Pipeline</p>
        <div className="flex items-end gap-2 h-24 mb-2">
          {pipeline.map((p) => (
            <div key={p.stage} className="flex-1 flex flex-col items-center gap-1">
              <span className="text-[9px] font-bold text-slate-600">{p.count}</span>
              <motion.div
                className="w-full rounded-sm"
                style={{ background: p.color }}
                initial={{ height: 0 }}
                animate={animate ? { height: `${(p.count / 89) * 90}%` } : { height: 0 }}
                transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
              />
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          {pipeline.map((p) => (
            <p key={p.stage} className="flex-1 text-center text-[8px] text-slate-400 leading-tight">{p.stage}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

const panels: Record<string, React.FC<{ animate: boolean }>> = {
  dashboard: DashboardPanel,
  inventory: InventoryPanel,
  payroll: PayrollPanel,
  crm: CRMPanel,
};

// ── Main component ───────────────────────────────────────────────────────────
export function HomeVideoShowcase() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [animate, setAnimate] = useState(true);

  // Re-trigger animations on tab switch
  const handleTab = (id: string) => {
    setAnimate(false);
    setActiveTab(id);
    setTimeout(() => setAnimate(true), 50);
  };

  const ActivePanel = panels[activeTab];

  return (
    <Section className="bg-slate-50 border-t border-slate-200/40">
      <Container>
        <FadeUp className="text-center mb-14">
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-accent-purple">
            Live Product Demo
          </span>
          <h2 className="text-3xl lg:text-4xl font-black font-heading text-text-primary mt-3">
            See SmartERP{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Working Live
            </span>
          </h2>
          <p className="text-text-muted mt-4 max-w-2xl mx-auto text-sm leading-relaxed">
            Explore every module of SmartERP — real-time analytics, inventory control, automated payroll, and CRM pipeline — all in one platform.
          </p>
        </FadeUp>

        <FadeUp className="relative max-w-5xl mx-auto">
          {/* Glow halo */}
          <div
            className="absolute -inset-2 rounded-3xl opacity-20 blur-2xl pointer-events-none"
            style={{ background: "linear-gradient(135deg, #7c3aed, #2563eb)" }}
          />

          {/* Browser chrome */}
          <div className="relative bg-white rounded-2xl border border-slate-200/70 shadow-2xl overflow-hidden">
            {/* Browser top bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-50 border-b border-slate-200/60">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 mx-3 bg-white rounded-md h-6 border border-slate-200/60 flex items-center px-3 gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
                <span className="text-[10px] text-slate-400 font-medium">smarterp.prozync.com/dashboard</span>
              </div>
              <div className="flex gap-2">
                <Bell className="w-4 h-4 text-slate-400" />
                <Settings className="w-4 h-4 text-slate-400" />
              </div>
            </div>

            {/* App header */}
            <div className="flex items-center justify-between px-6 py-3 border-b border-slate-100 bg-white">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-blue-600 flex items-center justify-center">
                  <span className="text-white text-xs font-black">S</span>
                </div>
                <span className="text-sm font-bold text-slate-800">SmartERP</span>
                <span className="text-[10px] text-slate-300 mx-1">|</span>
                <span className="text-[10px] text-slate-400">Prozync Innovations</span>
              </div>
              <div className="flex items-center gap-1 text-[10px] text-emerald-600 font-semibold bg-emerald-50 px-2.5 py-1 rounded-full">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Live
              </div>
            </div>

            {/* Module tabs */}
            <div className="flex border-b border-slate-100 bg-slate-50/50">
              {modules.map((tab) => {
                const Icon = tab.icon;
                const active = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTab(tab.id)}
                    className={`flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold transition-all duration-200 border-b-2 ${
                      active
                        ? "border-violet-500 text-violet-600 bg-white"
                        : "border-transparent text-slate-400 hover:text-slate-600 hover:bg-white/60"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Panel content */}
            <div className="p-5 bg-slate-50/30 min-h-[380px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="h-full"
                >
                  <ActivePanel animate={animate} />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom status bar */}
            <div className="flex items-center justify-between px-5 py-2 bg-slate-50 border-t border-slate-100">
              <div className="flex items-center gap-4">
                <span className="text-[9px] text-slate-400 font-medium">© 2024 SmartERP · Prozync Innovations</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[9px] text-slate-400">Last sync: just now</span>
                <div className="flex items-center gap-1">
                  <TrendingUp className="w-3 h-3 text-emerald-500" />
                  <span className="text-[9px] font-bold text-emerald-600">All systems operational</span>
                </div>
              </div>
            </div>
          </div>

          {/* Caption */}
          <p className="text-center text-xs text-slate-400 mt-4 font-medium">
            Interactive SmartERP demo · Click tabs to explore modules
          </p>
        </FadeUp>
      </Container>
    </Section>
  );
}
export default HomeVideoShowcase;
