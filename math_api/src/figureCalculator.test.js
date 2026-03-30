import { describe, expect, it, vi } from "vitest";
import FigureCalculator from "./figureCalculator.js";
import MathBasic from "./MathBasic.js";

describe("Figure Calculator", () => {
  it("Should contain calculateRectanglePerimeter, calculateRectangleArea, calculateTrianglePerimeter, and calculateTriangleArea functions", () => {
    const figureCalculator = new FigureCalculator({});

    expect(figureCalculator).toHaveProperty("calculateRectanglePerimeter");
    expect(figureCalculator).toHaveProperty("calculateRectangleArea");
    expect(figureCalculator).toHaveProperty("calculateTrianglePerimeter");
    expect(figureCalculator).toHaveProperty("calculateTriangleArea");
    expect(figureCalculator.calculateRectanglePerimeter).toBeInstanceOf(
      Function,
    );
    expect(figureCalculator.calculateRectangleArea).toBeInstanceOf(Function);
    expect(figureCalculator.calculateTrianglePerimeter).toBeInstanceOf(
      Function,
    );
    expect(figureCalculator.calculateTriangleArea).toBeInstanceOf(Function);
  });

  it("should return error if not given two parameters", () => {
    const figureCalculator = new FigureCalculator({});

    expect(() => figureCalculator.calculateRectanglePerimeter()).toThrowError();
    expect(() => figureCalculator.calculateRectanglePerimeter(1)).toThrowError();
    expect(() => figureCalculator.calculateRectanglePerimeter(1, 2, 3)).toThrowError();

    expect(() => figureCalculator.calculateRectangleArea()).toThrowError();
    expect(() => figureCalculator.calculateRectangleArea(1)).toThrowError();
    expect(() => figureCalculator.calculateRectangleArea(1, 2, 3)).toThrowError();

    expect(() => figureCalculator.calculateTrianglePerimeter()).toThrowError();
    expect(() => figureCalculator.calculateTrianglePerimeter(1)).toThrowError();
    expect(() => figureCalculator.calculateTrianglePerimeter(1, 2)).toThrowError();
    expect(() => figureCalculator.calculateTrianglePerimeter(1, 2, 3, 4)).toThrowError();

    expect(() => figureCalculator.calculateTriangleArea()).toThrowError();
    expect(() => figureCalculator.calculateTriangleArea(1)).toThrowError();
    expect(() => figureCalculator.calculateTriangleArea(1, 2, 3)).toThrowError();
  });

  it("should return error if parameter is not a number", () => {
    const figureCalculator = new FigureCalculator({});

    expect(() => figureCalculator.calculateRectanglePerimeter(true, {})).toThrowError();
    expect(() => figureCalculator.calculateRectanglePerimeter(null, "2")).toThrowError();

    expect(() => figureCalculator.calculateRectangleArea(true, {})).toThrowError();
    expect(() => figureCalculator.calculateRectangleArea(null, "2")).toThrowError();

    expect(() => figureCalculator.calculateTrianglePerimeter(true, {}, [])).toThrowError();
    expect(() => figureCalculator.calculateTrianglePerimeter(null, "2", 3)).toThrowError();

    expect(() => figureCalculator.calculateTriangleArea(true, {})).toThrowError();
    expect(() => figureCalculator.calculateTriangleArea(null, "2")).toThrowError();
  });

  describe("calculateRectanglePerimeter", () => {
    it("should return correct result of rectangle perimeter calculation when given valid parameters", () => {
      // Arrange
      const length = 40;
      const width = 20;

      // Using spy
      const spyAdd = vi.spyOn(MathBasic, "add");
      const spyMultiply = vi.spyOn(MathBasic, "multiply");
      const figureCalculator = new FigureCalculator(MathBasic);

      // ACTION
      const result = figureCalculator.calculateRectanglePerimeter(
        length,
        width,
      );

      // ASSERT
      expect(result).toBe(120);
      expect(spyAdd).toHaveBeenCalledWith(length, width);
      expect(spyMultiply).toHaveBeenCalledWith(2, 60);
    });
  });

  describe("calculateRectangleArea", () => {
    it("should return correct result of rectangle area calculation when given valid parameters", () => {
      // Arrange
      const length = 40;
      const width = 20;

      // Using spy
      const spyMultiply = vi.spyOn(MathBasic, "multiply");
      const figureCalculator = new FigureCalculator(MathBasic);

      // ACTION
      const result = figureCalculator.calculateRectangleArea(length, width);

      // ASSERT
      expect(result).toBe(800);
      expect(spyMultiply).toHaveBeenCalledWith(length, width);
    });
  });

  describe("calculateTrianglePerimeter", () => {
    it("should return correct result of triangle perimeter calculation when given valid parameters", () => {
      // Arrange
      const sideA = 10;
      const sideB = 20;
      const sideC = 30;

      // Using spy
      const spyAdd = vi.spyOn(MathBasic, "add");
      const figureCalculator = new FigureCalculator(MathBasic);

      // ACTION
      const result = figureCalculator.calculateTrianglePerimeter(
        sideA,
        sideB,
        sideC
      );

      // ASSERT
      expect(result).toBe(60);
      expect(spyAdd).toHaveBeenCalledWith(sideA, sideB);
      expect(spyAdd).toHaveBeenCalledWith(30, 30);
    });
  });

  describe("calculateTriangleArea", () => {
    it("should return correct result of triangle area calculation when given valid parameters", () => {
      const base = 10;
      const height = 20;

      const spyMultiply = vi.spyOn(MathBasic, "multiply");
      const spyDivide = vi.spyOn(MathBasic, "divide");
      const figureCalculator = new FigureCalculator(MathBasic);

      const result = figureCalculator.calculateTriangleArea(base, height);

      expect(result).toBe(100);
      expect(spyMultiply).toHaveBeenCalledWith(base, height);
      expect(spyDivide).toHaveBeenCalledWith(200, 2);
    });
  });
});
