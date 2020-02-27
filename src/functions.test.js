import Sum from "./functions";

test("add 1 + 2 to equal 3", () => {
  expect(Sum(1, 2)).toBe(3);
});

test("add string1 + string2 to equal string1string2", () => {
  expect(Sum('string1', 'string2')).toBe('string1string2');
});