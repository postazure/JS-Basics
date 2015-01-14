function merge(ary1,ary2) {
  var mergedAry = ary1.concat(ary2);
  mergedAry.sort(function (a,b) {
    return a-b;
  });
  return mergedAry
}
