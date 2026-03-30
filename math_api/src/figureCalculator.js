class FigureCalculator {
    constructor(mathBasic) {
        this._mathBasic = mathBasic;
    }

    calculateRectanglePerimeter(...args) {
        if (args.length !== 2) {
            throw new Error("Parameter harus 2");
        }

        const [length, width] = args;

        if (typeof length !== "number" || typeof width !== "number") {
            throw new Error("Parameter harus number");
        }

        // Formula for Perimeter
        return this._mathBasic.multiply(2, this._mathBasic.add(length, width));
    }

    calculateRectangleArea(...args) {
        if (args.length !== 2) {
            throw new Error("Parameter harus 2");
        }

        const [length, width] = args;

        if (typeof length !== "number" || typeof width !== "number") {
            throw new Error("Parameter harus number");
        }

        // Formula for Area
        return this._mathBasic.multiply(length, width);
    }

    calculateTrianglePerimeter(...args) {
        if (args.length !== 3) {
            throw new Error("Parameter harus 3");
        }

        const [sideA, sideB, sideC] = args;

        if (typeof sideA !== "number" || typeof sideB !== "number" || typeof sideC !== "number") {
            throw new Error("Parameter harus number");
        }

        // Formula for Perimeter
        return this._mathBasic.add(this._mathBasic.add(sideA, sideB), sideC);
    }

    calculateTriangleArea(...args) {
        if (args.length !== 2) {
            throw new Error("Parameter harus 2");
        }

        const [base, height] = args;

        if (typeof base !== "number" || typeof height !== "number") {
            throw new Error("Parameter harus number");
        }

        // Formula for Area
        return this._mathBasic.divide(this._mathBasic.multiply(base, height), 2);
    }
}

export default FigureCalculator;