function VigenèreCipher(key, abc) {
  this.encode = function (str) {
    return str
      .split("")
      .map((char, index) => {
        const charIndex = abc.indexOf(char);
        if (charIndex !== -1) {
          const shift = abc.indexOf(key[index % key.length]);
          const encodedCharIndex = (charIndex + shift) % abc.length;
          return abc[encodedCharIndex];
        } else {
          return char;
        }
      })
      .join("");
  };

  this.decode = function (str) {
    return str
      .split("")
      .map((char, index) => {
        const charIndex = abc.indexOf(char);
        if (charIndex !== -1) {
          const shift = abc.indexOf(key[index % key.length]);
          const decodedCharIndex =
            (charIndex - shift + abc.length) % abc.length;
          return abc[decodedCharIndex];
        } else {
          return char;
        }
      })
      .join("");
  };
}

const englishAlphabet = "abcdefghijklmnopqrstuvwxyz";
const katakanaAlphabet =
  "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";

const englishCipher = new VigenèreCipher("key", englishAlphabet);
const katakanaCipher = new VigenèreCipher("キー", katakanaAlphabet);

const encodedEnglish = englishCipher.encode("I love you");
const decodedEnglish = englishCipher.decode("I jyzc cme");

const encodedKatakana = katakanaCipher.encode("アイウエオ");
const decodedKatakana = katakanaCipher.decode("ア ィウ ェオ");

console.log(encodedEnglish);
console.log(decodedEnglish);

console.log(encodedKatakana);
console.log(decodedKatakana);
