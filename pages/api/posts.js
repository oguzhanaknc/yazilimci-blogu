import { getPosts } from "../../src/blog-posts";
export default async (req, res) => {
  const posts = await getPosts(240);
  res.json({ posts });
};
