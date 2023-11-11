function findEvenIndex(arr) {
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    const leftSum = arr.slice(0, i).reduce((sum, val) => sum + val, 0);
    const rightSum = arr.slice(i + 1).reduce((sum, val) => sum + val, 0);

    if (leftSum === rightSum) {
      return i;
    }
  }
  return -1;
}

const arr = [5, 2, 3, 4, 5, 2, 3];
const index = findEvenIndex(arr);
console.log("The index where left and right sums are equal is:", index);
