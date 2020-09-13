class Formatter {
  //add static methods here
  
  
  static capitalize(string) {
    let firstLetter = string.charAt(0).toUpperCase()
    return firstLetter  + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '')
  }
}