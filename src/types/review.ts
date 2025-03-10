export interface RevewProductType {
  id: number;
  date_created: string;
  date_created_gmt: string;
  product_id: number;
  product_name: string;
  product_permalink: string;
  status: string;
  reviewer: string;
  reviewer_email: string;
  review: string;
  rating: number;
  verified: boolean;
  reviewer_avatar_urls: Revieweravatarurls;
  _links: Links;
}

interface Links {
  self: Self[];
  collection: Collection[];
  up: Collection[];
}

interface Collection {
  href: string;
}

interface Self {
  href: string;
  targetHints: TargetHints;
}

interface TargetHints {
  allow: string[];
}

interface Revieweravatarurls {
  "24": string;
  "48": string;
  "96": string;
}
