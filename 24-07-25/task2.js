const globalSym = Symbol.for("sym");

const module1 = {};
module1[globalSym] = "module1 sym";

const module2 = {};
module2[globalSym] = "module2 sym";


console.log(module1[globalSym]=== module2[globalSym]);

console.log(Symbol.keyFor(globalSym));

const  sym1 = Symbol("sym");
const sym2 = Symbol("sym");

console.log(sym1 === sym2);
console.log(globalSym === sym1);



