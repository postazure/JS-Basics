function calculateAge (birthYear){

  var currentDate = new Date();
  currentYear = currentDate.getFullYear();
  delta = currentYear - birthYear;

  return [delta - 1, delta];
}

birthYear = prompt("birth year")
console.log(calculateAge(birthYear));
