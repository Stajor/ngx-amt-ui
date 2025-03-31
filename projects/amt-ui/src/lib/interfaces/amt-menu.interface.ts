export interface AmtMenuItem {
  group: string;
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
