class PaginationHelper {
  constructor(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }

  itemCount() {
    return this.collection.length;
  }

  pageCount() {
    return Math.ceil(this.itemCount() / this.itemsPerPage);
  }

  pageItemCount(pageIndex) {
    if (pageIndex < 0 || pageIndex >= this.pageCount()) {
      return -1;
    }

    if (pageIndex < this.pageCount() - 1) {
      return this.itemsPerPage;
    } else {
      return this.itemCount() % this.itemsPerPage || this.itemsPerPage;
    }
  }

  pageIndex(itemIndex) {
    if (itemIndex < 0 || itemIndex >= this.itemCount()) {
      return -1;
    }

    return Math.floor(itemIndex / this.itemsPerPage);
  }
}

// Example usage:
const collection = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const itemsPerPage = 4;
const helper = new PaginationHelper(collection, itemsPerPage);

console.log("Total Items: " + helper.itemCount());
console.log("Total Pages: " + helper.pageCount());
console.log("Items on Page 1: " + helper.pageItemCount(0));
console.log("Items on Page 2: " + helper.pageItemCount(1));
console.log("Page of Item 4: " + helper.pageIndex(3));
