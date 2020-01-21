import * as firebase from "../../server/firebaseFunction";

import { createSitemap, EnumChangefreq } from "sitemap";

export default async (req, res) => {
  if (!res) return {};
  const sitemap = createSitemap({
    hostname: "http://oguzhan.codes"
  });
  // Add any static entries here
  sitemap.add({ url: "/", changefreq: EnumChangefreq.DAILY });
  sitemap.add({ url: "/about", changefreq: EnumChangefreq.MONTHLY });
  // To add dynamic entries
  const products = await firebase.getBlogs();
  for (const product of products) {
    sitemap.add({
      url: `/${product.slug}`,
      changefreq: EnumChangefreq.WEEKLY
    });
  }
  res.setHeader("content-type", "application/xml");
  res.end(sitemap.toString());
};
