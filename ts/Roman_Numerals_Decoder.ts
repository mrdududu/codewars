// My Solution
export function solution(roman: string): number {
  roman = roman.replace("IV", "IIII").replace("IX", "VIIII");
  const mapTable: any = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  return [...roman].reduce((acc, el, i, arr) => {
    let num: number = mapTable[el];
    acc += mapTable[el] as number;
    return acc;
  }, 0);
}

// Best Solution
// https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type
const values: Record<string, number> = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

export function solution_Best(roman: string): number {
  let value = 0;
  for (let i = 0; i < roman.length; i++) {
    const current = values[roman[i]];
    const next = values[roman[i + 1]] || 0;
    if (current < next) {
      value -= current;
    } else {
      value += current;
    }
  }
  return value;
}

// Clever solution
export function solution_Clever(roman: string): number {
  const table = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };

  return roman.split("").reduceRight((prev, cur, i, arr) => {
    return table[arr[i + 1]] > table[cur]
      ? prev - table[cur]
      : prev + table[cur];
  }, 0);
}

const res = solution("IV");
console.log({ res });
