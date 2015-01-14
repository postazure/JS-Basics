function each(modArray, funcToApply) {
  var resultsArray = []
  for(var i=0; i<modArray.length; i++){
    resultsArray.push(funcToApply(modArray[i]))
  };
  return resultsArray
};
