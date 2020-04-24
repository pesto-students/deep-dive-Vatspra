import { deepEqual } from "./deepEqual";

describe("Template Test", () => {
  test("Shoud accept only objects", () => {
    try {
      deepEqual({}, 5, 4)
    } catch (e) {
      expect(e).toBeTruthy()
    }
  });

  test("Shoud return correct answer in case of simple object", () => {
    expect(deepEqual({ a: 5, b: 6 }, { a: 5, b: 6 }, { matchDescriptors: true })).toBe(true);
  });

  test("Shoud return correct answer in case of complex object", () => {
    expect(deepEqual({ a: { b: { c: { d: 4 } } }, e: 3, f: { g: {} } }, { a: { b: { c: { d: 4 } } }, e: 3, f: { g: { x: 6 } } }, { matchDescriptors: true })).toBe(false);
  });

  test("Shoud return correct answer in case of complex object", () => {
    expect(deepEqual({ a: { b: { c: { d: 4 } } }, e: 3, f: { g: { x: 6 } } }, { a: { b: { c: { d: 4 } } }, e: 3, f: { g: { x: 6 } } }, { matchDescriptors: true })).toBe(true);
  });

  test("Shoud return correct answer in case of different descriptor", () => {
    const obj = {};
    const obj2 = {};
    Object.defineProperty(obj2, "a", { value: 5 });
    Object.defineProperty(obj, "a", { value: 5 });
    expect(deepEqual(obj, obj2, { matchDescriptors: false })).toBe(true);
    expect(deepEqual(obj, obj2, { matchDescriptors: true })).toBe(true);
  });

  test("Shoud return correct answer in case of different descriptor", () => {
    const obj = { a: 5 };
    const obj2 = {};
    Object.defineProperty(obj2, "a", { value: 5 });
    expect(deepEqual(obj, obj2, { matchDescriptors: false })).toBe(true);
    expect(deepEqual(obj, obj2, { matchDescriptors: true })).toBe(false);
  });
});
