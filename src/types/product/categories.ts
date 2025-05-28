import { Links } from "./commom";

export interface CategoriesProductType {
  id: number;
  name: string;
  slug: string;
  parent: number;
  description: string;
  display: string;
  image: null;
  menu_order: number;
  count: number;
  _links: Links;
}
