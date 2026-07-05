/* src/constants/industries.ts */
import { Industry } from "../types";

export const INDUSTRIES: Industry[] = [
  {
    slug: "manufacturing",
    name: "Manufacturing",
    description: "Align your supply chains, monitor production lines, and organize warehouse inventories from a single integrated dashboard.",
    icon: "settings",
    visualType: "production-flow",
    status: "active",
    modules: ["inventory", "dashboard", "purchase", "reports"],
    challenges: [
      { title: "Production Line Lag", description: "Uncoordinated parts arrival stalling machine schedules." },
      { title: "Inventory Blindspots", description: "Inaccurate stock levels leading to supply shortages or overstocking." },
      { title: "Unstructured Purchase Records", description: "Manual invoice filings causing delays in supplier raw materials orders." }
    ],
    solutions: [
      { title: "Automated Supply Triggers", description: "Automatically raise purchase orders when raw materials drop below custom counts.", moduleName: "Inventory + Purchase" },
      { title: "Real-Time Stock Logs", description: "Monitor item arrivals, batch numbers, and warehouse movements on responsive dashboards.", moduleName: "Inventory Management" },
      { title: "Production Line Timelines", description: "Track assembly steps and align schedules with accurate delivery dates.", moduleName: "Dashboard + Reports" }
    ]
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    description: "Unify doctor schedules, patient check-in sheets, pharmaceutical items inventory, and department analytics.",
    icon: "activity",
    visualType: "healthcare-nodes",
    status: "active",
    modules: ["attendance", "payroll", "inventory", "analytics"],
    challenges: [
      { title: "Schedule Mismatches", description: "Overlapping doctor shifts and patient wait times due to manual rosters." },
      { title: "Medical Stock Tracking", description: "Failure to locate and monitor expiration dates on critical pharmaceutical batches." },
      { title: "Staff Payroll Math", description: "Hours tracking across overtime night shifts leading to payroll computation issues." }
    ],
    solutions: [
      { title: "Intelligent Department Rosters", description: "Schedule and map shifts dynamically based on doctor availability.", moduleName: "Employee Scheduling" },
      { title: "Batch & Expiry Alarms", description: "Set automatic notifications for sensitive medical supplies reaching shelf-life thresholds.", moduleName: "Inventory" },
      { title: "Shift-Linked Payroll Sync", description: "Feed check-in logs directly into payroll formulas to calculate accurate night shift premiums.", moduleName: "Payroll Engine" }
    ]
  },
  {
    slug: "retail",
    name: "Retail & E-Commerce",
    description: "Track online and in-store sales, synchronize stock databases instantly, generate customer bills, and review product analytics.",
    icon: "shopping-bag",
    visualType: "retail-dashboard",
    status: "active",
    modules: ["inventory", "sales", "analytics", "reports"],
    challenges: [
      { title: "Stock Synchronization", description: "In-store sales exhausting products that online shoppers are trying to purchase." },
      { title: "Slow Checkout Billing", description: "Manual invoice creation during high checkout volume delays customer queues." },
      { title: "Vague Analytics Insights", description: "Lack of clarity on best-performing lines or customer purchasing frequencies." }
    ],
    solutions: [
      { title: "Omnichannel Stock Sync", description: "Update online store databases instantly when in-store items pass checkout scanners.", moduleName: "Inventory Sync" },
      { title: "Quick Checkout Invoicing", description: "Generate bills, process customer information, and calculate discounts in seconds.", moduleName: "Sales & Billing" },
      { title: "Product Growth Analytics", description: "Review seasonal purchasing patterns and inventory velocities via readable flow charts.", moduleName: "Analytics" }
    ]
  },
  {
    slug: "education",
    name: "Education",
    description: "Organize student records, class attendance registries, administrative payroll, and semester fee records.",
    icon: "book-open",
    visualType: "default",
    status: "active",
    modules: ["attendance", "payroll", "reports", "dashboard"],
    challenges: [
      { title: "Scattered Student Files", description: "Grades, attendance, and tuition records stored across incompatible databases." },
      { title: "Attendance Tracking Load", description: "Teachers wasting class time taking rosters manually every semester." },
      { title: "Tuition Tracking Lag", description: "Difficulties monitoring pending fee balances and outstanding balances." }
    ],
    solutions: [
      { title: "Centralized Student Registry", description: "Store student records, fee logs, and schedules in one secure platform.", moduleName: "Administration Database" },
      { title: "Digital Check-In Registers", description: "Take rosters on tablets, updating attendance dashboards instantly.", moduleName: "Attendance Module" },
      { title: "Automated Fee Logs", description: "Monitor fee statuses and email payment receipts automatically.", moduleName: "Accounting & Reports" }
    ]
  },
  {
    slug: "construction",
    name: "Construction",
    description: "Coordinate building materials, log project steps, manage subcontractor payroll, and review site metrics.",
    icon: "hammer",
    visualType: "construction-mesh",
    status: "active",
    modules: ["dashboard", "inventory", "payroll", "reports"],
    challenges: [
      { title: "Material Delivery Delays", description: "Sanding or steel orders arriving late, stalling building crews." },
      { title: "Subcontractor Hours Logs", description: "Tracking worker attendance manually across dynamic building phases." },
      { title: "Project Cost Overruns", description: "Failing to connect material costs to real budget scopes in real-time." }
    ],
    solutions: [
      { title: "Site Stock Schedules", description: "Coordinate delivery logs and trigger orders to match project timeline stages.", moduleName: "Inventory Control" },
      { title: "Clock-In Mobile Dashboards", description: "Subcontractors scan check-in coordinates to feed attendance records.", moduleName: "Attendance & Payroll" },
      { title: "Project Budget Trackers", description: "Monitor real-time material expenditures against initial plan budgets.", moduleName: "Reports & Analytics" }
    ]
  },
  {
    slug: "logistics",
    name: "Logistics & Distribution",
    description: "Map transportation routes, update tracking numbers, synchronize warehouse inventories, and analyze shipment times.",
    icon: "truck",
    visualType: "logistics-map",
    status: "active",
    modules: ["inventory", "analytics", "reports", "dashboard"],
    challenges: [
      { title: "Warehouse Order Lag", description: "Slow sorting of items in warehouses causing freight dispatch delays." },
      { title: "Untracked Shipments", description: "Lack of updates for customer orders once cargo leaves warehouse doors." },
      { title: "Inefficient Route Logs", description: "Unoptimized dispatch cycles leading to high mileage and vehicle expenses." }
    ],
    solutions: [
      { title: "Smart Warehouse Sorting", description: "Optimize shelf picking rosters to pack and dispatch orders quickly.", moduleName: "Inventory Module" },
      { title: "Live Transit Dashboards", description: "Monitor package statuses, carrier details, and ETA estimates in real-time.", moduleName: "Dashboard + Reports" },
      { title: "Shipment Time Analytics", description: "Review dispatch logs to optimize paths and cargo distribution routes.", moduleName: "Analytics" }
    ]
  }
];
