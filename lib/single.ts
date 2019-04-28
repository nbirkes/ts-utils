export function single<T, U>(items: T[], predicate: (item: T) => boolean): T {
  const matchingItems = items.filter(it => predicate(it));
  if (matchingItems.length === 1) return matchingItems[0];
  if (matchingItems.length === 0) throw new Error('No items found');
  throw new Error('More than 1 item found');
}
