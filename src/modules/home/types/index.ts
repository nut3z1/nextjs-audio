export interface PostResponse {
  edges: NodeType[];
}

export interface NodeType {
  node: {
    title: string;
    excerpt: string;
    slug: string;
    date: string;
    featuredImage: FeaturedImage;
    author: Author;
  };
}

interface Author {
  node: Node2;
}

interface Node2 {
  name: string;
  firstName: string;
  lastName: string;
  avatar: Avatar;
}

interface Avatar {
  url: string;
}

interface FeaturedImage {
  node: Node;
}

interface Node {
  sourceUrl: string;
}

export interface ListProductType {
  id: number;
  title: string;
}

export enum NameCardType {
  Favourite = "favourite",
  Preview = "preview",
  SeeNow = "seeNow",
  ShoppingCart = "shoppingCart",
}
