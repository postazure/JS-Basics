describe("bubbleSort", function () {
  it("sorts an array", function () {
    var test_array = [6,4,2,1,3,5];
    var results = bubbleSort(test_array);
    expect(results).toEqual([1,2,3,4,5,6]);
  });
});
