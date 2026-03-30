const MathBasic = {
    add: (...args) => {
        if (args.length !== 2) {
            throw new Error("fungsi add hanya menerima 2 parameter");
        }

        const [a, b] = args;

        if (typeof a !== "number" || typeof b !== "number") {
            throw new Error("fungsi add hanya menerima parameter bertipe number");
        }

        return a + b;
    },

    substract: (...args) => {
        if (args.length !== 2) {
            throw new Error("fungsi substract hanya menerima 2 parameter");
        }

        const [a, b] = args;

        if (typeof a !== "number" || typeof b !== "number") {
            throw new Error("fungsi substract hanya menerima parameter bertipe number");
        }

        return a - b;
    },

    multiply: (...args) => {
        if (args.length !== 2) {
            throw new Error("fungsi multiply hanya menerima 2 parameter");
        }

        const [a, b] = args;

        if (typeof a !== "number" || typeof b !== "number") {
            throw new Error("fungsi multiply hanya menerima parameter bertipe number");
        }

        return a * b;
    },

    divide: (...args) => {
        if (args.length !== 2) {
            throw new Error("fungsi divide hanya menerima 2 parameter");
        }

        const [a, b] = args;

        if (typeof a !== "number" || typeof b !== "number") {
            throw new Error("fungsi divide hanya menerima parameter bertipe number");
        }

        if (b === 0) {
            throw new Error("fungsi divide tidak bisa membagi dengan 0");
        }

        return a / b;
    },
}

export default MathBasic;