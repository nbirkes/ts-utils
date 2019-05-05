export function all<T>(items: T[], predicate?: (item: T) => string | number | boolean): boolean {
  if (items.length <= 1) return true;
  const firstValue = predicate ? predicate(items[0]) : items[0];
  for (let item of items) {
    const currentValue = predicate ? predicate(item) : item;
    if (currentValue !== firstValue) return false;
  }
  return true;
}
