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
    const vowels = /[aeiouy]/
    const diphVowels = ["oo", "ea", "oi", "ou", "oa", "ee", "ai", "eau"];
    let syllableCount = 0;
    for (let i = 0; i < word.length; i++) {
      if (vowels.test(word[i])) {
        // check for dipthong vowel groups
        if ( i > 0 && vowels.test(word[i-1])){
          const pair = word.substring(i-1, i+1);
          if(diphVowels.includes(pair)){
            if(pair === "ea" && i + 1 < word.length && word[i+1] === 'u'){
              i++;
              continue;
            }
            continue;
          }
        }
        // if silent e, don't add to syllable count
        if (word[i] === 'e' && (i === word.length - 1)) {
          continue
        } else {
        syllableCount++;
        }
      }
    }
    return syllableCount;
    
  }
}