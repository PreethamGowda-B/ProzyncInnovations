"use client";
/* src/providers/ToastProvider.tsx */
import React, { createContext, useContext, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

export type ToastType = "success" | "warning" | "error" | "info";

export interface ToastItem {
  id: string;
  type: ToastType;
  title: string;
  message: string;
}

interface ToastContextType {
  toast: (type: ToastType, title: string, message: string) => void;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast must be used within ToastProvider");
  return context;
};

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const toast = useCallback((type: ToastType, title: string, message: string) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts(prev => [...prev, { id, type, title, message }]);
    
    // Auto dismiss after 5 seconds
    setTimeout(() => {
      removeToast(id);
    }, 5000);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ toast, removeToast }}>
      {children}
      <div className="fixed bottom-5 right-5 z-[500] flex flex-col gap-3 max-w-sm w-full pointer-events-none">
        <AnimatePresence>
          {toasts.map(t => {
            // Pick color border / bg
            let borderStyle = "border-info/30";
            let iconColor = "text-info";
            if (t.type === "success") {
              borderStyle = "border-success/30";
              iconColor = "text-success";
            } else if (t.type === "warning") {
              borderStyle = "border-warning/30";
              iconColor = "text-warning";
            } else if (t.type === "error") {
              borderStyle = "border-error/30";
              iconColor = "text-error";
            }

            return (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                className={`glass-panel p-4 rounded-lg border ${borderStyle} pointer-events-auto flex items-start justify-between shadow-lg`}
              >
                <div>
                  <h4 className={`text-sm font-bold ${iconColor}`}>{t.title}</h4>
                  <p className="text-xs text-text-secondary mt-1">{t.message}</p>
                </div>
                <button
                  onClick={() => removeToast(t.id)}
                  className="text-text-muted hover:text-text-primary text-xs ml-3 font-semibold transition-colors"
                >
                  ✕
                </button>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}
export default ToastProvider;
