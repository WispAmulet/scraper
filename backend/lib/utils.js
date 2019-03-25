// export function uniqueCount(scrapes) {
//   return scrapes.reduce((acc, scrape) => {
//     if (!acc.find(item => item.count === scrape.count)) {
//       // if the item is NOT in the accumulator, push that item in it
//       return [...acc, scrape];
//     }
//     // if the item is in the accumulator, return the accumulator itself
//     return acc;
//   }, []);
// }

export function uniqueCount(scrapes) {
  return scrapes.filter((item, i, arr) => {
    // if it's the first item, keep it
    if (i === 0) return true;
    // if the item's count property is NOT equal to last item's count property, keep it
    const lastItem = arr[i - 1];
    return item.count !== lastItem.count;
  });
}
