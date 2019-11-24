class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9- ']+/g, '');
  }
  

  static titleize(string){
    let sentenceArray = string.split(" ");
    let notCapitalized = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    let result = []
      for(let i = 0; i < sentenceArray.length; i++){
        if(i == 0) {
          result.push(this.capitalize(sentenceArray[i]))
        } else {
          if(notCapitalized.includes(sentenceArray[i])){
            result.push(sentenceArray[i])
          } else {
            result.push(this.capitalize(sentenceArray[i]))
          }
        }
      }
      return result.join(" ")
  }
}

// Write a method static capitalize that takes in a string and capitalizes the first letter.
// Write a method static sanitize that takes in a string and removes all non-alphanumeric characters except for dashes, single quotes and spaces.
// Write a method static titleize that takes in a string and capitalizes all words in a sentence except the, a, an, but, of, and, for, at, by, and from; and always capitalizes the first word

