export function sum(input: number[]): number {
  return input.reduce((acc, cur) => acc + cur, 0);
}
