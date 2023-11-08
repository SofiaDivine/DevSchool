function groups(words) {
  let anagramGroups = {};

  const sortCharacters = (word) => word.split("").sort().join("");

  words.forEach((word) => {
    const sortedWord = sortCharacters(word);
    if (!anagramGroups[sortedWord]) {
      anagramGroups[sortedWord] = [];
    }
    anagramGroups[sortedWord].push(word);
  });
  const result = Object.values(anagramGroups);
  return result;
}

let input = ["tsar", "rat", "tar", "star", "tars", "cheese"];
let output = groups(input);
output.forEach((group) => {
  console.log(`[${group.join(", ")}]`);
});
