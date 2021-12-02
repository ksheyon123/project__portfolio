export interface ShortcutProps {
  name: string;
  isSelected: boolean;
}

export interface CardProps {
  title: string;
  img?: string;
  desc?: string;
  created: number;
  rate: number;
}
export interface CategoryProps {
  id: number;
  name: string;
  _fKey: number;
  _pKey: string;
}

export interface ItemProps {
  title: string;
  _fKey: string;
}