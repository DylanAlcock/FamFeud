var synonyms = require('synonyms');

// Finds up to n synonyms of word
console.log(synonyms("screen"));

export function syn(text) {
  return synonyms("screen")
}