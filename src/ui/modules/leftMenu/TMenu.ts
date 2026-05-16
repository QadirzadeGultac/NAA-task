export type TSidebarItem = {
  label: string;
  path: string;
  icon?: React.ReactNode;
  children?: TSidebarItem[];
};