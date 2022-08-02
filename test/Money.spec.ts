class Dollar {
    amount: number;

    constructor(amount: number) {
        this.amount = amount;
    }

    times(amount: number): Dollar {
        return new Dollar(this.amount * amount);
    }

    equals(dollar: any): Boolean {
        const before = dollar as Dollar;
        return this.amount === before.amount;
    }
}

class Franc {
    amount: number;

    constructor(amount: number) {
        this.amount = amount;
    }

    times(amount: number): Dollar {
        return new Dollar(this.amount * amount);
    }

    equals(dollar: any): Boolean {
        const before = dollar as Franc;
        return this.amount === before.amount;
    }

}

describe('Money.ts', () => {
    it("돈이 곱해지는가", () => {
        const five = new Dollar(5)
        expect(five.times(2).amount).toBe(10);
        expect(five.times(3).amount).toBe(15);
    })
    it("vo가 같은가", () => {
        expect(new Dollar(5)
            .equals(
                new Dollar(5))
        ).toBeTruthy();
    })


    describe('Franck.ts', () => {
        const five = new Franc(5);
        expect(new Franc(10)).toBe(five.times(2));
        expect(new Franc(15)).toBe(five.times(3));

    });
});
