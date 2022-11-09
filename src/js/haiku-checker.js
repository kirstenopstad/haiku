// Business Logic
export class Haiku {

  constructor(text) {
    this.text = text;
  }

  checkHaiku = (text) => {
    if (text) {
      // Check line count
      const lineArray = text.split("\n");
      console.log(lineArray);
      console.log(lineArray.length);
      if (lineArray.length > 3) {
        return "too many lines";
      }else if (lineArray.length < 3) {
        return "not enough lines";
      } else {
        //syllable checking
        this.line1 = lineArray[0];
        this.line2 = lineArray[1];
        this.line3 = lineArray[3];
      }
      
      return "poem";
    } else {
      return "not a poem";
    }
  }

  checkWord = (word) => {
    // define vowel set
    const vowels = /[aeiou]/
    let vowelCount = 0;
    for (let i = 0; i < word.length; i++) {
      if (vowels.test(word[i])) {
        console.log(word[i]);
        vowelCount++;
      }
    }
    return vowelCount;
    
  }
}