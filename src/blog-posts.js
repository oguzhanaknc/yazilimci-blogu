export const getPosts = async full => {
  const content = await require("../src/posts/new-text.md");
  if (full == null) {
    full = Infinity;
  }
  return [
    {
      title: "Lorem Ipsum Nedir?",
      content: content.default.substring(0, full),
      date: "07.12.1999",
      slug: "deneme1"
    }
  ];
};
