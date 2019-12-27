class Formatter {
  /* class StaticMethod {
	static methodName() {
		console.log('My method is static!');
  } */

  static capitalize(str) {
    // capitalizes first letter
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  static sanitize(str) {
    // removes all non-alphanumeric characters except for dashes, single quotes, and spaces
    return str.replace(/[^a-zA-Z\-'\s]/g, '')
  }

  static titleize(str) {
    // capitalize all words except the, a, an, but, of, and, for, at, by, from
    // always capitalize the first word
    let splitString = str.split(' ')
    let excludeWords = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    return splitString.map(word => {
      if (splitString[0] === word) {
        return this.capitalize(word)
      } else if (excludeWords.includes(word)) {
        return word
      } else {
        return this.capitalize(word)
      }
    }).join(" ")
  }
}

