function maxCombinedHonor(arr, d) {
  const n = arr.length;
  let maxHonor = 0;

  for (let i = 0; i < n; i++) {
    let currentHonor = 0;

    for (let j = 0; j < d; j++) {
      const index = (i + j) % n;
      currentHonor += arr[index];
    }
    maxHonor = Math.max(maxHonor, currentHonor);
  }
  return maxHonor;
}

let honorArray = [1, 2, 3, 4, 5, 6];
let dayOfMonth = 3;
let combinedHonor = maxCombinedHonor(honorArray, dayOfMonth);
console.log(`Combined honor of the ${dayOfMonth} leaders: ${combinedHonor}`);
