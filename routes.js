import * as firebase from "./server/firebaseFunction";

const routes = [
  {
    url: "/", // Ana sayfamız için boş bırakıyoruz.
    changeFreq: "daily",
    priority: 1
  },
  {
    url: "about",
    changeFreq: "monthly",
    priority: 0.9
  }
];

let posts = firebase.getBlogs();

posts.map(post => {
  routes.push({
    url: post.slug,
    changeFreq: "monthly",
    priority: 0.8
  });
});

export default routes;
