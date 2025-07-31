const reverse = {
    words: ['sun', 'moon', 'stars'],
    *[Symbol.iterator] () {
        for(let i = this.words.length - 1; i >= 0; --i) {
            yield this.words[i];
        }
    }
};

for(const word of reverse) {
    console.log(word)
}
console.log([...reverse])


