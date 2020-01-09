class Formatter {
  //add static methods here

  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-\s']+/g, '');
  }

  static titleize(string) {
    let stringArray = string.split(' ')
    let newArray = []
    newArray.push(Formatter.capitalize(stringArray[0]))
    for (let i = 1; i < stringArray.length; i++) {
      if (stringArray[i] !== 'the' && stringArray[i] !== 'a' && stringArray[i] !== 'an' && stringArray[i] !== 'but' && stringArray[i] !== 'of' && stringArray[i] !== 'for' && stringArray[i] !== 'and' && stringArray[i] !== 'at' && stringArray[i] !== 'by' && stringArray[i] !== 'from') {
        newArray.push(Formatter.capitalize(stringArray[i]))
      }
      else {
        newArray.push(stringArray[i])
      }
    }
    return newArray.join(' ')
  }

}