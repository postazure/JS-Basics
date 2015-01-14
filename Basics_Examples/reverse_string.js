var ourString = "This is a day that I did stuff."

var reversedString = "";
for(var i = ourString.length-1; i >= 0; i--) {
  reversedString = reversedString + ourString[i]
}
console.log(reversedString)
