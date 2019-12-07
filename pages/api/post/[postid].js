import { getPosts } from "../../../src/blog-posts";

export default async (req, res) => {
  const posts = await getPosts();
  res.json({
    post: posts.find(post => post.slug === req.query.postid)
  });
};
