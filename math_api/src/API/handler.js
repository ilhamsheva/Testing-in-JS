import { response } from "./response.js";

const createHandlers = ({ mathBasic }) => {
    const getAddHandler = (req, res) => {
        const { num1, num2 } = req.params;
        const value = mathBasic.add(Number(num1), Number(num2));
        return response(res, 200, "fungsi penambahan berhasil", value);
    };

    const getSubstractHandler = (req, res) => {
        const { num1, num2 } = req.params;
        const value = mathBasic.substract(Number(num1), Number(num2));
        return response(res, 200, "fungsi pengurangan berhasil", value);
    };

    const getMultiplyHandler = (req, res) => {
        const { num1, num2 } = req.params;
        const value = mathBasic.multiply(Number(num1), Number(num2));
        return response(res, 200, "fungsi perkalian berhasil", value);
    };

    const getDivideHandler = (req, res) => {
        const { num1, num2 } = req.params;
        const value = mathBasic.divide(Number(num1), Number(num2));
        return response(res, 200, "fungsi pembagian berhasil", value);
    };

    return { getAddHandler, getSubstractHandler, getMultiplyHandler, getDivideHandler };
};

export { createHandlers };