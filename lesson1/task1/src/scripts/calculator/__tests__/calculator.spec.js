import { sum, mult } from '../calculator.js';

it('sum two numbers', () => {
  const res = sum(2, 3);
  expect(res).toEqual(5);
});

it('sum two numbers', () => {
  const res = sum(2, -3);
  expect(res).toEqual(-1);
});

it('mult two numbers', () => {
  const res = mult(2, 3);
  expect(res).toEqual(6);
});

it('mult two numbers', () => {
  const res = mult(2, -3);
  expect(res).toEqual(-6);
});
