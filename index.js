class Formatter {
  //add static methods here
  static capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  static sanitize(str){
    return str.replace(/[^a-zA-Z\-'\s]/g, '')
  }

  static titleize(str){
    let strArr = str.split(" ")
    let exclWords = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    
    return strArr.map(word => {
      if(strArr[0] === word){
        return this.capitalize(word)
      } else if (exclWords.includes(word)){
        return word
      } else {
        return this.capitalize(word)
      }
    }).join(" ")
  }
}