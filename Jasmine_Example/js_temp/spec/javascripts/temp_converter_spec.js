describe("convertFahrenheitToCelsius", function(){
  it("converts fahrenheit to celsius", function(){
    var fahrenheit = 100;
    var celsiusTemp = convertFahrenheitToCelsius(fahrenheit);
    expect(celsiusTemp).toBeCloseTo(37.778, 0.3);
  });
});

describe("convertKelvinToCelsius", function(){
  it("converts kelvin to celsius", function(){
    var kelvin = 274;
    var celsiusTemp = convertKelvinToCelsius(kelvin);
    expect(celsiusTemp).toBeCloseTo(0.83, 0.001);
  });
});

describe("convertKelvinToFahrenheit", function(){
  it("kelvin -> fahrenheit", function(){
    var kelvin = 383;
    var fahrenheitTemp = convertKelvinToFahrenheit(kelvin);
    expect(fahrenheitTemp).toBeCloseTo(229.73, 0.005);
  });
});

describe("convertCelsiusToFahrenheit", function(){
  it("converts celsius to fahrenheit", function(){
    var celsius = 120;
    var fahrenheitTemp = convertCelsiusToFahrenheit(celsius);
    expect(fahrenheitTemp).toBeCloseTo(248, 0.1);
  });
});

describe("convertCelsiusToKelvin", function(){
  it("C -> K", function(){
    var celsius = 57;
    var kelvinTemp = convertCelsiusToKelvin(celsius);
    expect(kelvinTemp).toBeCloseTo(330.15, 0.001);
  });
});

describe("convertFahrenheitToKelvin", function(){
  it("F -> K", function(){
    var fahrenheit = 224;
    var kelvinTemp = convertFahrenheitToKelvin(fahrenheit);
    expect(kelvinTemp).toBeCloseTo(379.817, 0.0001);
  });
});
