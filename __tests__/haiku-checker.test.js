import { checkHaiku } from '../src/js/haiku-checker.js';
import { Haiku } from '../src/js/haiku-checker.js';

describe('check haiku', () => {
  let haiku;

  beforeEach(() => {
    haiku = new Haiku();
  });

  test('It should return "not enought lines" if there are less than three lines', () => {
    expect(haiku.checkHaiku(`Hello, world!`)).toEqual("not enough lines");
  })

  test('It should return "too many lines" if there are more than three lines', () => { 
    expect(haiku.checkHaiku(`
      Good Morning Sun
      I am a bird
      Wearing a white poleyster shirt
      Who are you?
    `)).toEqual("too many lines");
  });

  test('It should return "not a poem" if no text is inputted', () => {
    expect(haiku.checkHaiku()).toEqual("not a poem");
  });

  test('It should return "poem" if text is inputted', () => {
    expect(haiku.checkHaiku("this is a pipe")).toEqual("poem");
  });
  
})