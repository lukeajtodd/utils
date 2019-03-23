import { hasClass, addClass, removeClass } from '../index';

let div: HTMLElement;

beforeEach(() => {
  div = document.createElement('div');
});

test(`hasClass verifies generated div has 'test' class`, () => {
  div.classList.add('test');
  expect(hasClass(div, 'test')).toBe(true);
});

test(`hasClass verifies generated div doesn't have 'test' class`, () => {
  expect(hasClass(div, 'test')).toBe(false);
});

test(`addClass successfully adds 'test' class to div`, () => {
  addClass(div, 'test');
  expect(div.classList.contains('test')).toBe(true);
});

test(`addClass successfully adds 'test' and 'test2' classes to div`, () => {
  addClass(div, 'test test2');
  expect(div.classList.contains('test')).toBe(true);
  expect(div.classList.contains('test2')).toBe(true);
});

test(`removeClass successfully removes 'test' class from div`, () => {
  div.classList.add('test');
  removeClass(div, 'test');
  expect(div.classList.contains('test')).toBe(false);
});
