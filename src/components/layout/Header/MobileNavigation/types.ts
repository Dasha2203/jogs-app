type NavItem = {
  name: string;
  link: string;
}

export type Props = {
  list: NavItem[];
  setIsOpen: (value: boolean) => void;
  isOpen: boolean;
}