const obj = {
  0: 2,
  1: 3,
  length: 2,

  *[Symbol.iterator]() {
    for (let i = 0; i < this.length; i++) {
      yield this[i];
    }
  }
};

for (const item of obj) {
  console.log(item);
}
