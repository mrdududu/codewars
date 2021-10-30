// My Solution
export function findShort(s: string): number {
  const res = s.split(" ").sort((a, b) => a.length - b.length);
  return res && 0 < res.length ? res[0].length : 0;
}

// Best solution and clever
export function findShort_Best(s: string): number {
  return Math.min(...s.split(" ").map((w) => w.length));
}

const res = findShort("bitcoin take over the world maybe who knows perhap");
console.log({ res });
