/* src/components/layout/Section.tsx */
import React from "react";
import { cn } from "../../lib/cn";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  as?: "section" | "div" | "footer" | "header" | "main" | "article" | "aside";
}

export function Section({
  children,
  className,
  size = "lg",
  as = "section",
  ...props
}: SectionProps) {
  const sizeMap = {
    sm: "py-12 lg:py-16",
    md: "py-16 lg:py-24",
    lg: "py-24 lg:py-32",
    xl: "py-32 lg:py-40",
  };

  const cssClasses = cn("w-full relative", sizeMap[size], className);

  // Switch statement on plain strings is 100% type safe
  switch (as) {
    case "div":
      return <div className={cssClasses} {...props}>{children}</div>;
    case "footer":
      return <footer className={cssClasses} {...props}>{children}</footer>;
    case "header":
      return <header className={cssClasses} {...props}>{children}</header>;
    case "main":
      return <main className={cssClasses} {...props}>{children}</main>;
    case "article":
      return <article className={cssClasses} {...props}>{children}</article>;
    case "aside":
      return <aside className={cssClasses} {...props}>{children}</aside>;
    default:
      return <section className={cssClasses} {...props}>{children}</section>;
  }
}
export default Section;
