class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '');
  }

  static titleize(string) {
    let sentenceArray = string.split(" ");
    let nope = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    return sentenceArray.map(word => {
      if (sentenceArray[0] === word) {
        return this.capitalize(word)
      } else if (nope.includes(word)) {
        return word
      } else {
        return this.capitalize(word)
      }
    }).join(" ")
    }
    
  }
