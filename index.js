class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1, string.length);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-\s']+/g, "");
  }

  static titleize(string) {
    let library = [
      "the",
      "a",
      "an",
      "but",
      "of",
      "and",
      "for",
      "at",
      "by",
      "from",
    ];
    let stringArray = string.split(" ");
    let result = [];
    for (let i = 0; i < stringArray.length; i++) {
      let testString = stringArray[i];
      if (library.includes(testString) && i != 0) {
        result.push(testString);
      } else {
        result.push(
          testString.charAt(0).toUpperCase() +
            testString.slice(1, testString.length)
        );
      }
    }
    return result.join(" ");
  }
}
