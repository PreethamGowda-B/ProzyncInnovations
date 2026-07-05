/* src/types/navigation.ts */
export interface MegaMenuItem {
  title: string;
  description?: string;
  href: string;
  icon?: string;
  status?: "active" | "coming-soon" | "beta" | "planned";
}

export interface MegaMenuSection {
  title: string;
  items: MegaMenuItem[];
}

export interface NavItem {
  label: string;
  href: string;
  isMegaMenu?: boolean;
  megaMenuSections?: MegaMenuSection[];
}
