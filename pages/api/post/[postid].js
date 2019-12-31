// Burası Tek bir postun getirilmesini sağlayan sayfa
import { getPosts } from "../../../src/blog-posts";
import { getComments } from "../../../src/comments";
export default async (req, res) => {
  const posts = await getPosts();
  const comments = await getComments();

  res.json({
    post: posts.find(post => post.slug === req.query.postid),
    comment: comments.find(comment => comment.postSlug === req.query.postid)
  });
};
