import { checkHaiku } from '../src/js/haiku-checker.js';
import { Haiku } from '../src/js/haiku-checker.js';

describe('check haiku', () => {
  let haiku;

  beforeEach(() => {
    haiku = new Haiku();
  });

  test('It should return "not a poem" if no text is inputted', () => {
    expect(checkHaiku()).toEqual("not a poem");
  });

  test('It should return "poem" if text is inputted', () => {
    expect(checkHaiku("this is a pipe")).toEqual("poem");
  });
  
})