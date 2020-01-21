import { createSitemap, EnumChangefreq } from "sitemap";
import * as firebase from "../server/firebaseFunction";
import { NextPage } from "next";
const Sitemap: NextPage = () => null;
Sitemap.getInitialProps = async ({ res }) => {
  if (!res) return {};
  const sitemap = createSitemap({
    hostname: "http://www.oguzhan.codes"
  });
  // Add any static entries here
  sitemap.add({ url: "/", changefreq: EnumChangefreq.DAILY });
  sitemap.add({ url: "/about", changefreq: EnumChangefreq.MONTHLY });
  // To add dynamic entries
  const posts = await firebase.getBlogs();
  posts.map(post => {
    sitemap.add({
      url: `/${post.slug}`,
      changefreq: EnumChangefreq.DAILY
    });
  });

  res.setHeader("content-type", "application/xml");

  res.end(sitemap.toString());
  return {};
};
export default Sitemap;
