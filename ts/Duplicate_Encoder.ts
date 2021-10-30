// My solution
export function duplicateEncode(word: string): string {
  return [...word]
    .map((letter) => {
      const match = word.match(
        new RegExp(`[${letter}]`, "ig")
      ) as RegExpMatchArray;
      return match.length > 1 ? ")" : "(";
    })
    .join("");
}

// Best solution and clever
export function duplicateEncode_Best(word: string) {
  return word
    .toLowerCase()
    .split("")
    .map((a, i, w) => {
      return w.indexOf(a) == w.lastIndexOf(a) ? "(" : ")";
    })
    .join("");
}

const res = duplicateEncode('(( @"),');
console.log({ res });
