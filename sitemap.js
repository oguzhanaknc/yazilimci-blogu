import { Sitemap } from "sitemap";
import routes from "./routes";

let sitemap = Sitemap.createSitemap({
  hostname: "http://www.oguzhan.codes",
  cacheTime: 600000, // 600 saniye (10 dakika) cache temizlenme süresi
  urls: routes
});

export default sitemap;
