const sym1 = Symbol("mySym");
const sym2 = Symbol("mySym");


const obj = {};
obj[sym1] =  "value for sym1";
obj[sym2] = "value for sym2";

console.log(sym1 === sym2);
console.log(obj[sym1]);
console.log(obj[sym2]);

console.log(Object.keys(obj));

let symbols = Object.getOwnPropertyDescriptor(obj);
console.log(symbols);

