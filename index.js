class Formatter {
  static capitalize(string) {
    return string[0].toUpperCase() + string.substring(1);
  }

  static sanitize(string) {
    return string.replace(/[^a-zA-Z '-]/g, "");
  }

  static titleize(string) {
    let exceptions = [
      "a",
      "an",
      "but",
      "of",
      "and",
      "for",
      "at",
      "by",
      "from",
      "the"
    ];
    let words = string.split(" ").map(function(word, i) {
      if (i != 0 && exceptions.find(a => a === word)) {
        return Formatter.sanitize(word);
      } else {
        return Formatter.capitalize(Formatter.sanitize(word));
      }
    });
    return words.join(" ");
  }
}
