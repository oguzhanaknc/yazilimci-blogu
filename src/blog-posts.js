export const getPosts = async full => {
  const content = await require("../src/posts/new-text.md");
  const contentiki = await require("../src/posts/yazi2.md");
  if (full == null) {
    full = Infinity;
  }
  return [
    {
      title: "Bu Blog ve Özellikleri",
      id: 1,
      content: contentiki.default.substring(0, full),
      date: "08.12.1999",
      slug: "bu-blog-ve-ozellikleri",
      readtime: readtime(contentiki),
      image:
        "https://cdna.artstation.com/p/assets/images/images/014/905/850/large/alena-aenami-witcher-1k.jpg?1546204748"
    },
    {
      title: "Sayfalama Test Yazısı 1",
      id: 2,
      content: content.default.substring(0, full),
      date: "08.12.1999",
      slug: "lorem-ipsum-nedir-iki",
      readtime: readtime(content),
      image:
        "https://cdnb.artstation.com/p/assets/images/images/007/198/563/large/alena-aenami-eclipse-1k.jpg?1504395238"
    },
    {
      title: "Sayfalama Test Yazısı 2",
      id: 3,
      content: content.default.substring(0, full),
      date: "08.12.1999",
      slug: "lorem-ipsum-nedir-iki",
      readtime: readtime(content),
      image:
        "https://cdnb.artstation.com/p/assets/images/images/007/198/563/large/alena-aenami-eclipse-1k.jpg?1504395238"
    },
    {
      title: "Sayfalama Test Yazısı 3",
      id: 4,
      content: content.default.substring(0, full),
      date: "08.12.1999",
      slug: "lorem-ipsum-nedir-iki",
      readtime: readtime(content),
      image:
        "https://cdnb.artstation.com/p/assets/images/images/007/198/563/large/alena-aenami-eclipse-1k.jpg?1504395238"
    },
    {
      title: "Sayfalama Test Yazısı 4",
      id: 5,
      content: content.default.substring(0, full),
      date: "08.12.1999",
      slug: "lorem-ipsum-nedir-iki",
      readtime: readtime(content),
      image:
        "https://cdnb.artstation.com/p/assets/images/images/007/198/563/large/alena-aenami-eclipse-1k.jpg?1504395238"
    },
    {
      title: "Sayfalama Test Yazısı 5",
      id: 6,
      content: content.default.substring(0, full),
      date: "08.12.1999",
      slug: "lorem-ipsum-nedir-iki",
      readtime: readtime(content),
      image:
        "https://cdnb.artstation.com/p/assets/images/images/007/198/563/large/alena-aenami-eclipse-1k.jpg?1504395238"
    },
    {
      title: "Sayfalama Test Yazısı 6",
      id: 7,
      content: content.default.substring(0, full),
      date: "08.12.1999",
      slug: "lorem-ipsum-nedir-iki",
      readtime: readtime(content),
      image:
        "https://cdnb.artstation.com/p/assets/images/images/007/198/563/large/alena-aenami-eclipse-1k.jpg?1504395238"
    }
  ];
};
// yazının ortalama okuma dakikasını hesaplama.
function readtime(text) {
  const wordsPerMinute = 200; // ortalama dakikada okunan kelime sayısı
  let value;
  let textLength = text.default.split(" ").length;
  if (textLength > 0) {
    value = Math.ceil(textLength / wordsPerMinute);
  }
  return value;
}
