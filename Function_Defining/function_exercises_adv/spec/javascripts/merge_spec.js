describe ("merge", function(){
  it("combines 2 sorted arrays", function(){
    var testAry1 = [1,3,5,7,9,11];
    var testAry2 = [2,4,6,8,10];
    var results = merge(testAry1, testAry2);
    expect(results).toEqual([1,2,3,4,5,6,7,8,9,10,11]);
  });
});
