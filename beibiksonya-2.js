class Vector {
  constructor(components) {
    if (!Array.isArray(components) || components.length === 0) {
      throw new Error("Vector must have non-empty components array.");
    }

    for (let i = 0; i < components.length; i++) {
      if (typeof components[i] !== "number") {
        throw aError("All components must be numbers.");
      }
    }

    this.components = components;
  }

  checkLength(otherVector) {
    if (this.components.length !== otherVector.components.length) {
      throw new Error("Vectors must have the same length for this operation.");
    }
  }

  add(otherVector) {
    this.checkLength(otherVector);
    const result = this.components.map(
      (value, index) => value + otherVector.components[index]
    );
    return new Vector(result);
  }

  subtract(otherVector) {
    this.checkLength(otherVector);
    const result = this.components.map(
      (value, index) => value - otherVector.components[index]
    );
    return new Vector(result);
  }

  dot(otherVector) {
    this.checkLength(otherVector);
    const result = this.components.reduce(
      (acc, value, index) => acc + value * otherVector.components[index],
      0
    );
    return result;
  }

  norm() {
    const sumOfSquares = this.components.reduce(
      (acc, value) => acc + value ** 2,
      0
    );
    return Math.sqrt(sumOfSquares);
  }

  equals(otherVector) {
    if (this.components.length !== otherVector.components.length) {
      return false;
    }

    for (let i = 0; i < this.components.length; i++) {
      if (this.components[i] !== otherVector.components[i]) {
        return false;
      }
    }

    return true;
  }

  toString() {
    return `(${this.components.join(",")})`;
  }
}

// Example usage
const a = new Vector([1, 2, 3]);
const b = new Vector([3, 4, 5]);
const c = new Vector([5, 6, 7, 8]);

console.log(a.add(b).toString());
console.log(a.subtract(b).toString());
console.log(a.dot(b));
console.log(a.norm());

try {
  a.add(c);
} catch (error) {
  console.error(error.message);
}

console.log(a.equals(new Vector([1, 2, 3]))); // Should return true
console.log(a.equals(new Vector([1, 2, 4]))); // Should return false
