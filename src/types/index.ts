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

export interface MenuItemsReponse {
  menuItems?: {
    nodes: MenuItemsNodes[];
  };
}
export interface MenuItemsNodes {
  id?: string;
  url?: string;
  label?: string;
  path?: string;
}

export interface OptionsMenu {
  label?: string;
  link?: string;
}

export interface ErrorResponse {
  error: number;
  message: string;
}
