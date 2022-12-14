import { Haiku } from '../src/js/haiku-checker.js';

describe('check haiku', () => {
  let haiku;
  let goodHaiku;
  let shortHaiku;
  let longHaiku;
  let generatedHaiku;

  beforeEach(() => {
    haiku = new Haiku("hellow world");
    goodHaiku = new Haiku(
    `snow mixes with rain
    my mother keeps calling me
    by my brother's name`);
    shortHaiku = new Haiku(
      `snow mixes with rain—
      my mother calling me
      by my brother's`);
    longHaiku = new Haiku(
      `white snow mixes with rain—
      my own mother keeps calling me
      by my brother's name`);

    generatedHaiku = new Haiku();
    generatedHaiku.buildWordBank("A young girl named Alice sits bored by a riverbank where she suddenly spots a White Rabbit with a pocket watch and waistcoat lamenting that he is late");
  });

  //buildLine tests ------
  test('It should return a line with specified syllables', () => {
    let line = generatedHaiku.buildLine(5);
    // console.log(line);
    //console.log(generatedHaiku.countSyllables(line))
    expect(generatedHaiku.countSyllables(line)).toEqual(5);
  });



  //generateHaiku tests -----
  test('it should return a haiku', () => {
    let AIhaiku = generatedHaiku.generateHaiku();
    console.log(AIhaiku);
    expect(generatedHaiku.checkHaiku(AIhaiku)).toEqual("poem");
  });

  // buildWordBank tests --------
  test('It should add input text to word bank', () => {
    expect(generatedHaiku.WBWordCount).toEqual(26);
  });

  // word Bank tests --------

  test('It should store multiple syllables', () => {
    haiku.addWBWord("word", 1);
    haiku.addWBWord("diet", 2); 
    haiku.addWBWord("fungible", 3);
    haiku.addWBWord("beautiful", 3);
    const string = haiku.wordBank[1].toString() + ","+ haiku.wordBank[2].toString()+ "," + haiku.wordBank[3].toString();
    expect(haiku.wordBank).toEqual({1: ["word"], 2: ["diet"], 3: ["fungible", "beautiful"]});
    expect(string).toEqual("word,diet,fungible,beautiful");
    expect(haiku.highestSyllable).toEqual(3);
  });


  test('It should not store duplicates', () => {
    haiku.addWBWord("word", 1);
    haiku.addWBWord("word", 1);
    expect(haiku.wordBank[1].toString()).toEqual("word");
    expect(haiku.highestSyllable).toEqual(1);
  }); 

  test('It should store an array of words of the same syllable', () => {
    haiku.addWBWord("word", 1);
    haiku.addWBWord("mouse", 1);
    expect(haiku.wordBank[1].toString()).toEqual("word,mouse");
  }); 

  test('It should store a word in the word bank in existing sylablle array', () => {
    haiku.addWBWord("word", 1);
    haiku.addWBWord("mouse", 1);
    expect(haiku.WBWordCount).toEqual(2);
  });

  test(('it should store a word in the word bank'), () => {
    haiku.addWBWord("word", 1);
    expect(haiku.WBWordCount).toEqual(1);
  });


  // checkOurHaiku tests -------

  test('It should return false if haiku is too short', () => {
    expect(shortHaiku.checkOurHaiku()).toEqual(false);
  });

  test('It should return false if haiku is too long', () => {
    expect(longHaiku.checkOurHaiku()).toEqual(false);
  });

  test('It should return true if poem is a haiku', () => {
    expect(goodHaiku.checkOurHaiku()).toEqual(true);
  });

  test('It should return false if not a poem', () => {
    expect(haiku.checkOurHaiku()).toEqual(false);
  });

  // countSyllables tests -------

  test('should return line input', () => {
    expect(haiku.countSyllables("hello world")).toEqual(3);
  });

  // checkWord tests -------

  test('It should count words that end in -es preceded r', () => {
    expect(haiku.checkWord("features")).toEqual(2);
    expect(haiku.checkWord("ogres")).toEqual(2);
  });

  test('It should count words that end -ed preceded by hard consonant', () => {
    expect(haiku.checkWord("guided")).toEqual(2);
    expect(haiku.checkWord("pitted")).toEqual(2);
    expect(haiku.checkWord("minted")).toEqual(2);
  });

  test('It should count words that end -es preceded by hard consonant', () => {
    expect(haiku.checkWord("dices")).toEqual(2);
    expect(haiku.checkWord("pages")).toEqual(2);
    expect(haiku.checkWord("ashes")).toEqual(2);
    expect(haiku.checkWord("passes")).toEqual(2);
    expect(haiku.checkWord("mixes")).toEqual(2);
    expect(haiku.checkWord("grazes")).toEqual(2);
  });

  test('It should count words that end in -ed or -es as silent e', () => {
    expect(haiku.checkWord("leaves")).toEqual(1);
    expect(haiku.checkWord("wakened")).toEqual(2);
  });

  test('should count word with vowel before le as one syllable', () => {
    expect(haiku.checkWord("male")).toEqual(1);
  });

  test('It should count an instance of short words that end in e', () => {
    expect(haiku.checkWord("me")).toEqual(1);
  });

  test('It should count an instance of -le as an exception to the silent e rule', () => {
    expect(haiku.checkWord("candle")).toEqual(2);
    expect(haiku.checkWord("fungible")).toEqual(3);
  });
  
  test('it should count non diph vowels as seperate syllables', () => {
    expect(haiku.checkWord("diet")).toEqual(2);
    expect(haiku.checkWord("diaeresis")).toEqual(4);
  });

  test('It should count two diphthong vowels as one syllable', () => {
    expect(haiku.checkWord("moon")).toEqual(1);
    expect(haiku.checkWord("coin")).toEqual(1);
    expect(haiku.checkWord("loud")).toEqual(1);
    expect(haiku.checkWord("bread")).toEqual(1);
    expect(haiku.checkWord("boat")).toEqual(1);
    expect(haiku.checkWord("meet")).toEqual(1);
    expect(haiku.checkWord("pair")).toEqual(1);
    expect(haiku.checkWord("avoid")).toEqual(2);
    expect(haiku.checkWord("guide")).toEqual(1);
    expect(haiku.checkWord("beautiful")).toEqual(3);
  });

  test('It should return the number of syllables in the presence of a silent e', () => {
    expect(haiku.checkWord("tape")).toEqual(1);
    expect(haiku.checkWord("extreme")).toEqual(2);
  });

  test('It should return the number of vowels in a word', () => {
    expect(haiku.checkWord("banana")).toEqual(3);
  });

  // Haiku tests -------

  test('test haiku constructor', () => {
    expect(haiku.text).toEqual("hellow world");
  });

  // checkHaiku tests -------

  test('It should return "not enought lines" if there are less than three lines', () => {
    expect(haiku.checkHaiku(`Hello, world!`)).toEqual("not enough lines");
  });

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
  
});