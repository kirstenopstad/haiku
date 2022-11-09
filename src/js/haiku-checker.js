// Business Logic
export class Haiku {

  constructor() {

  }

  checkHaiku = (text) => {
    if (text) {
      // Check line count
      const lineArray = text.split("\n");
      console.log(lineArray);
      console.log(lineArray.length);
      if (lineArray.length > 3) {
        return "too many lines"
      } 
      return "poem";
    } else {
      return "not a poem";
    }
 s }
}