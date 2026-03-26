import MathBasic from "./MathBasic.js";

describe("A Math Basic", () => {
  it("should contains add, substract, multiply, and divide function", () => {
    expect(MathBasic).toHaveProperty("add");
    expect(MathBasic).toHaveProperty("substract");
    expect(MathBasic).toHaveProperty("multiply");
    expect(MathBasic).toHaveProperty("divide");
    expect(MathBasic.add).toBeInstanceOf(Function);
    expect(MathBasic.substract).toBeInstanceOf(Function);
    expect(MathBasic.multiply).toBeInstanceOf(Function);
    expect(MathBasic.divide).toBeInstanceOf(Function);
  });
});

describe("A add function", () => {
  it("should throw error when not given 2 parameters", () => {
    expect(() => MathBasic.add()).toThrowError();
    expect(() => MathBasic.add(1)).toThrowError();
    expect(() => MathBasic.add(1, 2, 3)).toThrowError();
    expect(() => MathBasic.add(1, 2, 3, 4)).toThrowError();
  });

  it("should throw error if not number", () => {
    expect(() => MathBasic.add("1", 2)).toThrowError();
    expect(() => MathBasic.add(1, "2")).toThrowError();
    expect(() => MathBasic.add(true, 2)).toThrowError();
    expect(() => MathBasic.add(1, false)).toThrowError();
  });

  it("should return the sum of two numbers", () => {
    expect(MathBasic.add(1, 2)).toBe(3);
    expect(MathBasic.add(-1, -2)).toBe(-3);
    expect(MathBasic.add(-1, 2)).toBe(1);
    expect(MathBasic.add(1.5, 2.5)).toBe(4);
  });
});

describe("A substract function", () => {
  it("should throw error when not given 2 parameters", () => {
    expect(() => MathBasic.substract()).toThrowError();
    expect(() => MathBasic.substract(1)).toThrowError();
    expect(() => MathBasic.substract(1, 2, 3)).toThrowError();
    expect(() => MathBasic.substract(1, 2, 3, 4)).toThrowError();
  });

  it("should throw error if not number", () => {
    expect(() => MathBasic.substract("1", 2)).toThrowError();
    expect(() => MathBasic.substract(1, "2")).toThrowError();
    expect(() => MathBasic.substract(true, 2)).toThrowError();
    expect(() => MathBasic.substract(1, false)).toThrowError();
  });

  it("should return the sum of two numbers", () => {
    expect(MathBasic.substract(1, 2)).toBe(-1);
    expect(MathBasic.substract(-1, -2)).toBe(1);
    expect(MathBasic.substract(-1, 2)).toBe(-3);
  });
});
