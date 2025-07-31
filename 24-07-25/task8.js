function range (start, end, step = 1) {
    if(step === 0) {
        throw new Error("Step cannot be zero");
    }
    return {
        *[Symbol.iterator]() {
            if(step > 0) {
                for(let i = start; i < end; i += step) {
                    yield i;
                }
            } else {
                for(let i = start; i > end; i += step) {
                    yield i;
                }
            }
        }
    }
}
for(const num of range(5,15,2)) {
    console.log(num);
}
