export function countBits(n: number): number {
  const dec2bin = (dec: number): string => dec.toString(2);
  const bin = dec2bin(n);
  return [...bin].reduce((acc, el) => acc + Number(el), 0);
}

export function countBits_Best(n: number): number {
  return n.toString(2).replace(/0/g, "").length;
}

const res = countBits(3154107111084581);
console.log({ res });
