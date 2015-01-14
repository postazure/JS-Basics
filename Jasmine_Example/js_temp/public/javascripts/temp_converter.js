// to celsius
function convertFahrenheitToCelsius(fahrenheit){
  return (fahrenheit - 32)/1.8;
};
function convertKelvinToCelsius(kelvin){
  return kelvin - 273.15;
};
// To fahrenheit
function convertCelsiusToFahrenheit(celsius){
  return (9/5)*celsius + 32;
};
function convertKelvinToFahrenheit(kelvin){
  celsius = convertKelvinToCelsius(kelvin);
  return convertCelsiusToFahrenheit(celsius);
};
//  to kelvin
function convertCelsiusToKelvin(celsius){
  return celsius + 273.15;
};
function convertFahrenheitToKelvin(fahrenheit){
  celsius = convertFahrenheitToCelsius(fahrenheit);
  return convertCelsiusToKelvin(celsius);
};
