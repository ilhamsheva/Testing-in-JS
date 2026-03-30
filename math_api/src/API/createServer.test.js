import { expect, vi } from "vitest";
import request from "supertest";
import MathBasic from "../MathBasic.js";
import createServer from "./createServer.js";

describe("A HTTP Server", () => {
    describe("when GET /add", () => {
        it("should response with a status code of 200 and the payload value is addition result of num1 and num2 correctly", async () => {
            const num1 = 10;
            const num2 = 5;
            const spyAdd = vi.spyOn(MathBasic, 'add');
            const app = createServer({ mathBasic: MathBasic });

            const response = await request(app).get(`/add/${num1}/${num2}`);

            expect(response.status).toBe(200);
            expect(response.body.value).toEqual(15);
            expect(spyAdd).toHaveBeenCalledWith(num1, num2);
        });
    });

    describe("when GET /substract", () => {
        it("should response with a status code of 200 and the payload value is substraction result of num1 and num2 correctly", async () => {
            const num1 = 10;
            const num2 = 5;
            const spySubstract = vi.spyOn(MathBasic, 'substract');
            const app = createServer({ mathBasic: MathBasic });

            const response = await request(app).get(`/substract/${num1}/${num2}`);

            expect(response.status).toBe(200);
            expect(response.body.value).toEqual(5);
            expect(spySubstract).toHaveBeenCalledWith(num1, num2);
        });
    });

    describe("when GET /multiply", () => {
        it("should response with a status code of 200 and the payload value is multiplication result of num1 and num2 correctly", async () => {
            const num1 = 10;
            const num2 = 5;
            const spyMultiply = vi.spyOn(MathBasic, 'multiply');
            const app = createServer({ mathBasic: MathBasic });

            const response = await request(app).get(`/multiply/${num1}/${num2}`);

            expect(response.status).toBe(200);
            expect(response.body.value).toEqual(50);
            expect(spyMultiply).toHaveBeenCalledWith(num1, num2);
        });
    });

    describe("when GET /divide", () => {
        it("should response with a status code of 200 and the payload value is division result of num1 and num2 correctly", async () => {
            const num1 = 10;
            const num2 = 5;
            const spyDivide = vi.spyOn(MathBasic, 'divide');
            const app = createServer({ mathBasic: MathBasic });

            const response = await request(app).get(`/divide/${num1}/${num2}`);

            expect(response.status).toBe(200);
            expect(response.body.value).toEqual(2);
            expect(spyDivide).toHaveBeenCalledWith(num1, num2);
        });
    });
});