import express from 'express';
import { createHandlers } from './handler.js';

const createServer = ({ mathBasic }) => {
    const app = express();
    const { getAddHandler, getSubstractHandler, getMultiplyHandler, getDivideHandler } = createHandlers({ mathBasic });

    app.use(express.json());

    app.get('/add/:num1/:num2', getAddHandler);
    app.get('/substract/:num1/:num2', getSubstractHandler);
    app.get('/multiply/:num1/:num2', getMultiplyHandler);
    app.get('/divide/:num1/:num2', getDivideHandler);

    return app;
}

export default createServer;