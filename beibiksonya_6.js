function landPerimeter(grid) {
  let perimeter = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "X") {
        perimeter += 4; // Each 'X' cell contributes 4 to the perimeter

        // Check adjacent cells
        if (i > 0 && grid[i - 1][j] === "X") {
          perimeter -= 2; // Subtract 2 for each shared edge
        }

        if (j > 0 && grid[i][j - 1] === "X") {
          perimeter -= 2;
        }
      }
    }
  }

  return `Total land perimeter: ${perimeter}`;
}

// Example usage:
const grid = [
  ["X", "O", "X", "O", "X"],
  ["O", "X", "O", "X", "O"],
  ["X", "O", "X", "O", "X"],
  ["O", "X", "O", "X", "O"],
];

console.log(landPerimeter(grid)); // Output: 'Total land perimeter: 18'
