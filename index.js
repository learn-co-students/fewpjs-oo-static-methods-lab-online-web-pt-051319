class Formatter {

  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '')
  }

  static titleize(string) {
    const nonWords = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    let newString = string.split(" ").map(function(word) {
      if(nonWords.find(w => w === word) === undefined)
        {return Formatter.capitalize(word)} else {
          return word
        }
    }).join(' ')
    return Formatter.capitalize(newString)
  }  

}