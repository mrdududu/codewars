// My Solution
export class G964 {
  public static perimeter = (n: number) => {
    const fibonachi = (i: number, acc: number[] = []): number[] => {
      if (0 < i) {
        if (0 === acc.length) {
          acc.push(0);
        } else if (1 === acc.length) {
          acc.push(1);
        } else {
          acc.push(acc[acc.length - 2] + acc[acc.length - 1]);
        }

        acc = fibonachi(i - 1, acc);
      }

      return acc;
    };

    const num = fibonachi(n + 2).reduce((acc, el) => acc + el, 0);
    return num * 4;
  };
}

// Best solution
export class G964_Best {
  private static fib = (n) => {
    var a = 1,
      b = 1,
      tmp;
    while (n-- > 0) {
      tmp = a;
      a = b;
      b += tmp;
    }
    return a;
  };

  public static perimeter = (n) => {
    return 4 * (G964_Best.fib(n + 2) - 1);
  };
}

const res = G964.perimeter(20);
console.log({ res });
