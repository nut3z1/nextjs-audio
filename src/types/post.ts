export interface Author {
  name: string;
  firstName: string;
  lastName: string;
  avatar: {
    url: string;
  };
}

export interface PostFields {
  title: string;
  excerpt: string;
  slug: string;
  id: number;
  status: "draft" | "publish";
  date: string;
  featuredImage: {
    node: {
      sourceUrl: string;
    };
  };
  author: {
    node: Author;
  };
  categories: {
    edges: Array<{
      node: {
        name: string;
      };
    }>;
  };
  tags: {
    edges: Array<{
      node: {
        name: string;
      };
    }>;
  };
}

export interface PostRevision {
  title: string;
  excerpt: string;
  content: string;
  author: {
    node: Author;
  };
}

export interface PostData {
  post: PostFields & {
    content: string;
    revisions?: {
      edges: Array<{
        node: PostRevision;
      }>;
    };
    slug: string;
  };
  posts: {
    edges: Array<{
      node: PostFields;
    }>;
  };
}
