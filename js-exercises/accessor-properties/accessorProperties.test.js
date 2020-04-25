import { accessorProperties } from "./accessorProperties";

describe("Template Test", () => {
  test("should only set numbers", () => {
    const obj = accessorProperties();
    expect(() => { obj.number = null; }).toThrow(TypeError);
    expect(() => { obj.number = undefined; }).toThrow(TypeError);
    expect(() => { obj.number = NaN; }).toThrow(TypeError);
    expect(() => { obj.number = []; }).toThrow(TypeError);
  });

  test("should return correct result for positive numbers", () => {
    const obj = accessorProperties();
    obj.number = 5;
    const result = obj.number;
    expect(result).toBe('101');
  });

  test("should return correct result for negative numbers", () => {
    const obj = accessorProperties();
    obj.number = -5;
    const result = obj.number;
    expect(result).toBe('11111111111111111111111111111011');
  });
});
