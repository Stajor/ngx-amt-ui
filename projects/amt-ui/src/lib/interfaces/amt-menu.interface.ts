export interface AmtMenuItem {
  group?: string;
  separator?: boolean;
  selected?: boolean;
  active?: boolean;
  items: Array<AmtSubMenuItem>;
}

export interface AmtSubMenuItem {
  icon?: string;
  label?: string;
  route?: string | null;
  expanded?: boolean;
  active?: boolean;
  children?: Array<AmtSubMenuItem>;
}

export interface AmtProfileUser {
  email: string;
  initials: string;
  fullName: string;
  photo?: string;
}

export interface AmtProfileItem {
  label: string;
  icon: string;
  route?: string;
  click?: () => void;
}

export interface AmtProfileLanguage {
  title: string;
  flagClass: string;
}
