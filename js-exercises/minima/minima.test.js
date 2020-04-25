import { minima } from "./minima";

describe("minima", () => {
  test("test for the valid arguments", () => {
    expect(() => minima(-1, [])).toThrow();
    expect(() => minima(1, null)).toThrow(TypeError);
    expect(() => minima('', [1, 2, 3])).toThrow(TypeError);
  });

  test("return the first k elements of the sorted array", () => {
    expect(minima(2, [5, 3, 4])).toEqual([3, 4]);
    expect(minima(3, [5, 3, 4, 6, 10, 1])).toEqual([1, 3, 4]);
  });

  test("only consider the numbers in the array", () => {
    expect(minima(2, [5, 'a', 'b', 4])).toEqual([4, 5]);
    expect(minima(3, ['a', null, undefined, '', 5, 6, 7, 8])).toEqual([5, 6, 7]);
  });
});
