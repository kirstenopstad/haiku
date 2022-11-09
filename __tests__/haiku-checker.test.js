import { checkHaiku } from '../src/js/haiku-checker.js';
import { Haiku } from '../src/js/haiku-checker.js';

describe('check haiku', () => {
  let haiku;
  let goodHaiku
  let shortHaiku
  let longHaiku


  beforeEach(() => {
    haiku = new Haiku("hellow world");
    goodHaiku = 
    `snow mixes with rain—
    my mother keeps calling me
    by my brother's name`
  });
  
  test('It should return false if not a poem', () => {
    expect(haiku.checkOurHaiku()).toEqual(false);
  })

  test('should return line input', () => {
    expect(haiku.countSyllables("hello world")).toEqual(3);
  })

  test('should count word with vowel before le as one syllable', () => {
    expect(haiku.checkWord("male")).toEqual(1);
  })

  test('It should count an instance of short words that end in e', () => {
    expect(haiku.checkWord("me")).toEqual(1);
  })

  test('It should count an instance of -le as an exception to the silent e rule', () => {
    expect(haiku.checkWord("candle")).toEqual(2);
    expect(haiku.checkWord("fungible")).toEqual(3);
  })
  
  test('it should count non diph vowels as seperate syllables', () => {
    expect(haiku.checkWord("diet")).toEqual(2);
    expect(haiku.checkWord("diaeresis")).toEqual(4);
  })

  test('It should count two diphthong vowels as one syllable', () => {
    expect(haiku.checkWord("moon")).toEqual(1);
    expect(haiku.checkWord("coin")).toEqual(1);
    expect(haiku.checkWord("loud")).toEqual(1);
    expect(haiku.checkWord("bread")).toEqual(1);
    expect(haiku.checkWord("boat")).toEqual(1);
    expect(haiku.checkWord("meet")).toEqual(1);
    expect(haiku.checkWord("pair")).toEqual(1);
    expect(haiku.checkWord("avoid")).toEqual(2);
    expect(haiku.checkWord("beautiful")).toEqual(3);
  })

  test('It should return the number of syllables in the presence of a silent e', () => {
    expect(haiku.checkWord("tape")).toEqual(1);
    expect(haiku.checkWord("extreme")).toEqual(2);
  })

  test('It should return the number of vowels in a word', () => {
    expect(haiku.checkWord("banana")).toEqual(3);
  })

  test('test haiku constructor', () => {
    expect(haiku.text).toEqual("hellow world");
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
    expect(haiku.checkHaiku(`Good Morning Sun
    I am a bird
    Wearing a white poleyster shirt`)).toEqual("poem");
  });
  
})