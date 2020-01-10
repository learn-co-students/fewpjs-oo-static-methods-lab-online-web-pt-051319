class Formatter {
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static sanitize(str) {
    return str.replace(/[^a-zA-Z\-'\s]/g, '');
  }

  static titleize(str) {
    let ignoreWords = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
    let splitSentence = str.split(" ");

    return splitSentence.map(word => {
      if (splitSentence[0] === word) {
        return this.capitalize(word)
      }else if (ignoreWords.includes(word)) {
          return word
      }else {
        return this.capitalize(word)
      }
    }).join(" ")
  }
}