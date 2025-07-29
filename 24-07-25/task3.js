class AdminOnly{
    static [Symbol.hasInstance](obj){
        return obj.type === "admin";

    }
}

const obj1 = {
    type : "admin",
}

const obj2 = {
    type : "not admin",
}

console.log(obj1 instanceof AdminOnly);
console.log(obj2 instanceof AdminOnly);
