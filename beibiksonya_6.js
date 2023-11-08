function perimeter(grid) {
  if (!grid || grid.length === 0) {
    return 0;
  }
  const numRows = grid.length;
  const numCols = grid[0].length;
  let totalPerimeter = 0;

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      if (grid[i][j] === "X") {
        totalPerimeter += cellPerimeter(i, j, grid);
      }
    }
  }
  return totalPerimeter;
}

function cellPerimeter(row, col, grid) {
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  const numRows = grid.length;
  const numCols = grid[0].length;
  let thePerimeter = 0;

  for (const [dx, dy] of directions) {
    const newRow = row + dx;
    const newCol = col + dy;
    if (
      newRow < 0 ||
      newRow >= numRows ||
      newCol < 0 ||
      newCol >= numCols ||
      grid[newRow][newCol] === "O"
    ) {
      thePerimeter++;
    }
  }
  return thePerimeter;
}

const grid = ["XOXO", "XOOO", "OOXO", "XXXO", "OXOO"];
const totalPerimeter = perimeter(grid);
console.log("Total land perimeter:", totalPerimeter);
