import { checkHaiku } from '../src/js/haiku-checker';

describe('It should return "poem" if text is inputted', () => {
  expect(checkHaiku("this is a pipe")).toEqual("poem");
})