function maxOfTwo(num1, num2){
  if (num1 >= num2){
    return num1;
  }else{
    return num2;
  }
};

function maxOfThree(num1, num2, num3){
  if (num1 >= num2){
    if (num1 >= num3){
      return num1;
    }else{
      return num3;
    };
  }else{
    return num2;
  };
};

function isVowel(letter){
  var vowels = ["a","e","i","o","u"];
  return vowels.indexOf(letter) >= 0;
};

function sum(some_array){
  var sum = 0;
  for (var i=0; i< some_array.length; i++){
    sum += some_array[i];
  };
  return sum;
};

function multiply(some_array){
  var multiply_value = 1;
  for (var i=0; i< some_array.length; i++){
    multiply_value *= some_array[i];
  };
  return multiply_value;
};

function longestWord(words){
  var longestWord = ""
  for (var i=0; i<words.length; i++){
    if (words[i].length > longestWord.length){
      longestWord = words[i];
    };
  };
  return longestWord
};
