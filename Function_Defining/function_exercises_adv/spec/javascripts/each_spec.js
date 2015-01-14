describe("each", function (){
  it("+1 each element in array", function(){
    var test_array = [1,2,3];

    function addOne(elem){
      return elem + 1
    };

    var results_array = each(test_array, addOne);
    expect(results_array).toEqual([2,3,4])
  });
  it("sqr each element in array", function(){
    var test_array = [1,2,3];

    function addSqr(elem){
      return elem*elem
    };

    var results_array = each(test_array, addSqr);
    expect(results_array).toEqual([1,4,9])
  });
});
