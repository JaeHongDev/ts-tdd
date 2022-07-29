class Dollar {
     amount: number;

    constructor(amount: number) {
        this.amount = amount;
    }

    times(amount: number): void {
        this.amount *= amount;
    }
}

describe('Money.ts', () => {
    it("돈이 곱해지는가", () => {
        const five = new Dollar(5)
        five.times(2);
        expect(five.amount).toBe(10);
    })
});
