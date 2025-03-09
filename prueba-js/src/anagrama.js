const anagrama = (word1, word2) => {
  const clean = (text) => {
    const normalized = text.toLowerCase().normalize("NFD");
    return Array.from(normalized)
      .filter((char) => char >= "a" && char <= "z")
      .join("");
  };

  const sortString = (text) => Array.from(text).sort().join("");

  return sortString(clean(word1)) === sortString(clean(word2));
};

export default anagrama;
