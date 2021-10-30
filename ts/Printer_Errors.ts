// My Solution
export class G964 {
  public static printerError(s: string): string {
    const match = s.match(/[n-z]/gi) as RegExpMatchArray;
    const errors: number = match?.length ?? 0;
    return `${errors}/${s.length}`;
  }
}

// Best solution and clever
export class G964_Best {
  public static printerError(s: string): string {
    let r = s.replace(/[a-m]/g, "");
    return r.length + "/" + s.length;
  }
}

// const res = G964.printerError("aaabbbbhaijjjm");
const res = G964.printerError("aaaxbbbbyyhwawiwjjjwwm");
console.log({ res });
