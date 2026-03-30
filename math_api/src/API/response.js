export const response = (res, statusCode, message, data) => {
    return res.status(statusCode).json({
        message,
        value: data
    });
};