describe("maxOfTwo", function(){
  it("returns the larger of two numbers", function(){
    var largerNumber = maxOfTwo(3,21);
    expect(largerNumber).toBe(21);
  });
});
describe("maxOfThree", function(){
  it("returns largest of three numbers", function(){
    var largerNumber = maxOfThree(3,21,18);
    expect(largerNumber).toBe(21);
  });
});
describe("isVowel", function(){
  it("the char is a vowel", function(){
    var testChar = "a";
    var results = isVowel(testChar);
    expect(results).toBe(true);
  });
  it("the char is not a vowel", function(){
    var testChar = "w";
    var results = isVowel(testChar);
    expect(results).toBe(false);
  });
});
describe("sum", function(){
  it("sums all numbers in an array", function(){
    var test_array = [1,2,3];
    var results = sum(test_array);
    expect(results).toBe(6);
  });
});
describe("multiply", function(){
  it("multiply each element together", function(){
    var test_array = [2,2,3];
    var results = multiply(test_array);
    expect(results).toBe(12);
  });
});
describe("longestWord", function(){
  it("returns the longest word in an array", function(){
    var test_array = ["pea", "apple", "book"];
    var results = longestWord(test_array);
    expect(results).toBe("apple");
  });
});
