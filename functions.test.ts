const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    it("returns an array", () => {
        expect(Array.isArray(shuffleArray)).toBe(true);
    });

    it("returns an array of the same length as the argument sent in", () => {
        const arr = [1, 2, 3, 4, 5];
        expect(shuffleArray.length).toEqual(arr.length);
    });
})