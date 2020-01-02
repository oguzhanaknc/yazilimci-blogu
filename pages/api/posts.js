//burası tüm postları getiren sayfa
import { getPosts } from "../../src/blog-posts";
export default async (req, res) => {
  const posts = await getPosts(420);
  res.json({ posts });
};
