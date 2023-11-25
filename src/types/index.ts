import { CategoryType } from './enum';

export interface EventMap {
  id: number;
  title: string;
  tags?: string[];
  category?: string;
  description?: string;
  coords: [number, number];
  colorText?: string;
}

export interface Category {
  id: CategoryType;
  name: string;
  icon: JSX.Element;
  color?: string;
  preset: string;
  marker: string;
  items: EventMap[];
}
