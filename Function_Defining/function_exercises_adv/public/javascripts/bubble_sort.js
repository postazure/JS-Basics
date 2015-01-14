function bubbleSort(ary) {
  for (var i = 0; i < ary.length-1; i++) {
    for (var j = 0; j < ary.length-1; j++) {
      console.log(ary);
      if (ary[j] >= ary[j+1]){
        var oldVal = ary[j];
        ary[j] = ary[j+1];
        ary[j+1] = oldVal;
      };
    };
  };
  return ary;
};
