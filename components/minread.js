function readtime(text) {
  const wordsPerMinute = 200; // ortalama dakikada okunan kelime sayısı
  let value;
  let textLength = text.split(" ").length;
  if (textLength > 0) {
    value = Math.ceil(textLength / wordsPerMinute);
  }
  return value;
}
export default readtime;
