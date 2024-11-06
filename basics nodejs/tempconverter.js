// ----- 30 Temp converter

// This function converts celius to fahrenheit with celsius input value
function celsiusToFahrenheit(celsius) {
  const f = (celsius * 1.8) + 32; // calculation for celsius to fahrenheight
  console.log( celsius + " Celsius = " + f + " Fahrenheit");

  if (f > 80) {
    console.log("The temperature is very hot!");
  }

  if (f > 100) {
    console.log("The temperature is extremely hot!");
  }
}

// This function converts fahrenheit to celsius with Fahrenheit value
function fahrenheitToCelsius(fahrenheit) {
  const c = (fahrenheit - 32) * 0.5556; // calculstion formul for fahrenheit to celsius
  console.log( fahrenheit + " Fahrenheit = " + c + " Celsius");

  if (c > 30) {
    console.log("The temperature is very hot!");
  }

  if (c > 50) {
    console.log("The temperature is extremely hot!");
  }
}

celsiusToFahrenheit(30);

fahrenheitToCelsius(86);