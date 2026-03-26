const MathBasic = {
    add: (...args) => {
        if (args.length < 2 || args.length > 2) {
            throw new Error("fungsi add hanya menerima 2 parameter");
        }

        // a dan b adalah parameter
        const [a, b] = args;

        if (typeof a !== "number" || typeof b !== "number") {
            throw new Error("fungsi add hanya menerima parameter bertipe number");
        }

        return a + b;
    },

    substract: (...args) => {
        if (args.length < 2 || args.length > 2) {
            throw new Error("fungsi add hanya menerima 2 parameter");
        }

        // a dan b adalah parameter
        const [a, b] = args;

        if (typeof a !== "number" || typeof b !== "number") {
            throw new Error("fungsi add hanya menerima parameter bertipe number");
        }

        return a - b;
    },

    multiply: () => {

    },

    divide: () => {

    },
}

export default MathBasic;