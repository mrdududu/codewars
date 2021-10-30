// My solution
export function camelCase(str: string): string {
  return str
    .split(" ")
    .map((w) => {
      const l = [...w];
      if (l && l.length > 0) {
        l[0] = l[0].toUpperCase();
      }
      return l.join("");
    })
    .join("");
}

// Best solution
export const camelCase_Best = (str: string): string =>
  str
    .split(" ")
    .map((s) => (s ? s[0].toUpperCase() + s.slice(1) : ""))
    .join("");

// Clever solution
export function camelCase_Clever(str: string): string {
  return str
    .replace(/\b\w/g, (str) => str.toUpperCase())
    .split(" ")
    .join("");
}

const res = camelCase("test case");
console.log({ res });
