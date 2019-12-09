export const getPosts = async full => {
  const content = await require("../src/posts/new-text.md");
  const contentiki = await require("../src/posts/yazi2.md");
  if (full == null) {
    full = Infinity;
  }
  return [
    {
      title: "Loerm Ipsum Nedir ?",
      content: contentiki.default.substring(0, full),
      date: "08.12.1999",
      slug: "lorem-ipsum-nedir",
      readtime: readtime(contentiki)
    },
    {
      title: "Loerm Ipsum Nedir ?",
      content: content.default.substring(0, full),
      date: "08.12.1999",
      slug: "lorem-ipsum-nedir-iki",
      readtime: readtime(content)
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
