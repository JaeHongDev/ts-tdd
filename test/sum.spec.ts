const sum = (a, b) => a + b;

const findByTextToIndex = (param: any[], s: string) => param.findIndex((str) => s === str);

describe('sample tdd practice', () => {
    it("test", () => {
        expect(sum(1, 1)).toBe(2);
    })

    it("이 별에 대해서 특정 값을 찾아 인덱스를 반환하는 함수를 만든다.", () => {
        expect(findByTextToIndex(["1", "2", "3"], "1")).toBe(0);
        expect(findByTextToIndex(["1", "2", "3"], "2")).toBe(1);
    })
})


const array = [];

// 이 별에 대해서 특정 값을 찾아 인덱스를 반환하는 함수를 만든다.

