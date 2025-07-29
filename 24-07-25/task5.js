const obj = {
    0: 2,
    1: 3,
    length: 2,

    [Symbol.iterator]() {
        let index = 0;

        return {
            next() {
                if (index < obj.length) {
                    return {
                        value: obj[index++],
                        done: false,
                    }
                }

                return {
                    value: undefined,
                    done: true,
                }
            }
        }        
    }
}

for (const item of obj) {
    console.log(item);
}