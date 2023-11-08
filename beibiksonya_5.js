function getRootProperty(obj, targetValue) {
  for (const key in obj) {
    if (Array.isArray(obj[key]) && obj[key].includes(targetValue)) {
      return key;
    } else if (typeof obj[key] === "object") {
      const result = getRootProperty(obj[key], targetValue);
      if (result !== null) {
        return key;
      }
    }
  }
  return null;
}

const object = {
  one: {
    nest1: {
      val1: [9, 34, 92, 100],
    },
  },
  "2f7": {
    n1: [10, 92, 53, 71],
    n2: [82, 34, 6, 19],
  },
};
console.log(getRootProperty(object, 9));
console.log(getRootProperty(object, 10));
console.log(getRootProperty(object, 82));
console.log(getRootProperty(object, 999));
