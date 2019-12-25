class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]+/g, '')
  }

  static titleize(string) {
    let noCap = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let sentenceArray = string.split(" ")
    let newArray = []

      for(let i = 0; i < sentenceArray.length; i++){
        if(i === 0){
        newArray.push(this.capitalize(sentenceArray[i]))
      } else {
        if(noCap.includes(sentenceArray[i])) {
          newArray.push(sentenceArray[i])
        } else {
          newArray.push(this.capitalize(sentenceArray[i]))
        }
      }
    }
    return newArray.join(" ")
  }
}