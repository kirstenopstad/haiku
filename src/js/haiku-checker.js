// Business Logic
export class Haiku {

  constructor(text) {
    this.text = text;
    this.wordBank = {};
    this.highestSyllable = 0;
    this.WBWordCount = 0;
  }
  buildLine(syllables) {
    let randSyllables = 0;
    let line = "";
    // pick a random array of syllables that exists
    while (syllables > 0) {
      while (this.wordBank[randSyllables] === undefined) {

        if (syllables < this.highestSyllable) {
          randSyllables = Math.floor(Math.random() * syllables + 1);
        } else {
          randSyllables = Math.floor(Math.random() * this.highestSyllable + 1);
        }
      }
      // pick a random word from given array
      let randWord = Math.floor(Math.random() * this.wordBank[randSyllables].length);
      // add word to line
      let newWord = this.wordBank[randSyllables][randWord];
      line += (newWord + " ");
      // deduct added syllables
      syllables -= randSyllables;
      // console.log("checkWord Syllables: " + newWord);
      // console.log("checkWord Syllables: " + this.checkWord(newWord));
      // console.log("syllables: " + randSyllables);
      // console.log("syllables left: " + syllables);
      // console.log("current line: " + line);
      //console.log("line is num syllables: " + this.countSyllables(line));
      randSyllables = 0;
    }
    line = line.trim();
    return line;
  }

  generateHaiku() {
    //build line 1
    const newline1 = this.buildLine(5);
    //build line 2
    const newline2 = this.buildLine(7);
    //build line 3
    const newline3 = this.buildLine(5);
    //assmemble
    this.newHaiku = newline1 + "\n" + newline2 + "\n" + newline3;
    return this.newHaiku;
  }

  buildWordBank(text) {
    // take input text, cast to array
    let textArray = text.split(" ");
    // console.log("text array is: " + textArray);
    // for each word
    textArray.forEach((word) => {
      // checkWord to get syllable count
      const wordSyll = this.checkWord(word);
      // console.log("word: " + word + "syl: " + wordSyll);
      // add word to WB
      this.addWBWord(word, wordSyll);
    });

  }

  addWBWord(word, syllables) {

    // !this.wordBank[syllables].includes(word) // & word not in array
    if (syllables > this.highestSyllable) {
      this.highestSyllable = syllables;
    }
    if (this.wordBank[syllables] !== undefined && !this.wordBank[syllables].includes(word)) { //syllables array exists 
      this.wordBank[syllables].push(word);
      this.WBWordCount++;
      return true;
    }
    else if (this.wordBank[syllables] === undefined) {
      let array = [];
      array.push(word);
      this.wordBank[syllables] = array;
      this.WBWordCount++;
      return true;
    }
    return false;
  }

  checkOurHaiku() {
    const result = this.checkHaiku(this.text);
    if (result != "poem") {
      return false;
    } else {
      const line1Syll = this.countSyllables(this.line1);
      // console.log(line1Syll);
      // console.log(typeof line1Syll);
      const line2Syll = this.countSyllables(this.line2);
      // console.log(line2Syll);
      // console.log(typeof line2Syll);
      const line3Syll = this.countSyllables(this.line3);
      // console.log(line3Syll);
      // console.log(typeof line3Syll);
      if (line1Syll === 5 && line2Syll === 7 && line3Syll === 5) {
        return true;
      }
      return false;
    }
  }

  countSyllables(line) {
    const words = line.split(" ");
    let totalSyllables = 0;
    words.forEach(element => {
      // console.log("word "+ element +" has: " + this.checkWord(element));
      totalSyllables += this.checkWord(element);
    });
    // console.log(totalSyllables);
    return totalSyllables;
  }

  checkHaiku(text) {
    if (text) {
      // Check line count
      const lineArray = text.split("\n");
      if (lineArray.length > 3) {
        return "too many lines";
      } else if (lineArray.length < 3) {
        return "not enough lines";
      } else {
        //syllable checking
        this.line1 = lineArray[0];
        this.line2 = lineArray[1];
        this.line3 = lineArray[2];
      }

      return "poem";
    } else {
      return "not a poem";
    }
  }



  checkWord(word) {
    // define vowel set
    const vowels = /[aeiouy]/;
    const diphVowels = ["oo", "ui", "ea", "ay", "ae", "oi", "ou", "oa", "ee", "ai", "eau"];
    const hardConstS = ['c', 'x', 'h', 'g', 's', 'z'];
    const hardConstD = ['d', 't'];
    const endingConst = ['l', 'r'];
    let lastLetter;
    let syllableCount = 0;
    // check for -es or -ed ending
    if ((word[word.length - 1] === ('s') || word[word.length - 1] === ('d')) && word[word.length - 2] === 'e') {
      lastLetter = word[word.length - 1];
      word = word.slice(0, word.length - 1);
      //console.log(word);
    }
    for (let i = 0; i < word.length; i++) {
      if (vowels.test(word[i])) {
        // check for dipthong vowel groups
        if (i > 0 && vowels.test(word[i - 1]) && diphVowels.includes(word.substring(i - 1, i + 1))) {
          const pair = word.substring(i - 1, i + 1);
          if (pair === "ea" && i + 1 < word.length && word[i + 1] === 'u') {
            i++;
            continue;
          }
          continue;
        }
        // if last letter is e
        if (word[i] === 'e' && (i === word.length - 1)) {
          // if previous letter is -l or -r
          if (word.length > 1 && endingConst.includes(word[i - 1])) {
            // if previous previous letter is a vowel, then don't add to syllable count
            if (word.length > 2 && vowels.test(word[i - 2])) {
              continue;
            } else {
              // else add to syllable count
              syllableCount++;
            }
          } else if (hardConstS.includes(word[i - 1]) && lastLetter === 's') {
            // if previous letter is c|g|h|s|x|z
            // then add syllable
            syllableCount++;
          } else if (hardConstD.includes(word[i - 1]) && lastLetter === 'd') {
            syllableCount++;
          } else {
            // if short word ending in e has no syllables yet, give it a syllable
            if (syllableCount === 0) {
              syllableCount++;
            }
            // else don't add to syllable count
            continue;
          }
        } else {
          syllableCount++;
        }
      }
    }
    if (syllableCount === 0) {
      syllableCount++;
    }
    return syllableCount;
  }
}