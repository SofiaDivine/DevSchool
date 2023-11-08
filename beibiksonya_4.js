function unpackSausages(truck) {
  const sausages = [];
  let sausagesCount = 0;

  for (const box of truck) {
    if (box.length === 0) {
      continue;
    }
    for (const package of box) {
      if (package.startsWith("[") && package.endsWith("]")) {
        const sausage = package.slice(1, -1);

        if (sausage.length % 4 === 0) {
          sausages.push(sausage);
          sausagesCount++;

          if (sausagesCount % 5 === 0) {
            sausages.pop();
          }
        }
      }
    }
  }
  return sausages.join(" ");
}

const truck = [
  ["(-)", "[IIII]", "[))))]"],
  ["IuI", "[llll]"],
  ["[@@@@]", "UwU", "[IlII]"],
  ["IuI", "[))))]", "x"],
  [],
];
const result = unpackSausages(truck);
console.log("Display counter:", result);
