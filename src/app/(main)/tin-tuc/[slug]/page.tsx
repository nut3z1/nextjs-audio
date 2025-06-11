import { getPostAndMorePosts } from "@/modules/api/api";
import PostContent from "@/modules/posts/PostDetail/postContent";
import { notFound } from "next/navigation";

const PostDetailPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const { post, posts } = await getPostAndMorePosts(slug);
  if (!post) {
    notFound();
  }
  return <PostContent post={post} posts={posts} />;
};

export default PostDetailPage;
