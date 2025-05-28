import { Links } from "./commom";

export interface ProductsParams {
  per_page?: number;
  category?: number;
  include?: number[];
  exclude?: number[];
  slug?: string;
  search?: string;
  product?: number;
  orderby?: string;
  order?: string;
}

export interface ProductsReviewsParams
  extends Pick<ProductsParams, "per_page" | "product"> {
  review?: number;
  reviewer?: number[];
  reviewer_email?: number[];
  rating?: number;
  product_id?: number;
}

export interface CategoriesType {
  id: number;
  name?: string;
  slug?: string;
}

export enum CategoriesSlug {
  DanKaraoke = "dan-karaoke",
}

export interface ProductsType {
  id: number;
  name: string;
  slug: string;
  permalink: string;
  date_created: string;
  date_created_gmt: string;
  date_modified: string;
  date_modified_gmt: string;
  type: string;
  status: string;
  featured: boolean;
  catalog_visibility: string;
  description: string;
  short_description: string;
  sku: string;
  price: string;
  regular_price: string;
  sale_price: string;
  date_on_sale_from: null;
  date_on_sale_from_gmt: null;
  date_on_sale_to: null;
  date_on_sale_to_gmt: null;
  on_sale: boolean;
  purchasable: boolean;
  total_sales: number;
  virtual: boolean;
  downloadable: boolean;
  downloads: any[];
  download_limit: number;
  download_expiry: number;
  external_url: string;
  button_text: string;
  tax_status: string;
  tax_class: string;
  manage_stock: boolean;
  stock_quantity: null;
  backorders: string;
  backorders_allowed: boolean;
  backordered: boolean;
  low_stock_amount: null;
  sold_individually: boolean;
  weight: string;
  dimensions: Dimensions;
  shipping_required: boolean;
  shipping_taxable: boolean;
  shipping_class: string;
  shipping_class_id: number;
  reviews_allowed: boolean;
  average_rating: string;
  rating_count: number;
  upsell_ids: any[];
  cross_sell_ids: any[];
  parent_id: number;
  purchase_note: string;
  categories: Category[];
  tags: any[];
  images: Image[];
  attributes: AttributesType[];
  default_attributes: any[];
  variations: any[];
  grouped_products: any[];
  menu_order: number;
  price_html: string;
  related_ids: number[];
  meta_data: Metadatum[];
  stock_status: string;
  has_options: boolean;
  post_password: string;
  _links: Links;
  quantity?: number;
  totalPrice?: string;
}

export interface AttributesType {
  id?: number;
  name: string;
  options: string[];
  position: number;
  slug: string;
  variation: boolean;
  visible: boolean;
}

interface Metadatum {
  id: number;
  key: MetadataProject;
  value: string;
}

export enum MetadataProject {
  Score = "_yoast_wpseo_content_score",
  Prefix = "_product_prefix",
  Suffix = "_product_suffix",
  Cat = "_yoast_wpseo_primary_product_cat",
}

interface Image {
  id: number;
  date_created: string;
  date_created_gmt: string;
  date_modified: string;
  date_modified_gmt: string;
  src: string;
  name: string;
  alt: string;
}

interface Category {
  id: number;
  name: string;
  slug: string;
}

interface Dimensions {
  length: string;
  width: string;
  height: string;
}
