import { contains } from '../index';

// Positive test
test(`String 'banana' contains character 'a'`, () => {
  expect(contains('banana', 'a')).not.toBe(false);
});

// Negative test
test(`String 'banana' contains character 'z'`, () => {
  expect(contains('banana', 'z')).toBe(false);
});