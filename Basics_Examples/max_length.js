var maxLength = 4;
var unfilteredWords = ["ball", "apple", "pineapple", "trees", "biggertrees", "largewords", "shrimps"]
var filteredWords = []

function filterer(element) {
  if (element.length <= maxLength) {
    filteredWords.push( element)
  }
}

unfilteredWords.forEach(filterer)

console.log(filteredWords)
