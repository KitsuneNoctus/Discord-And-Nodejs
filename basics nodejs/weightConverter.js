function kilosToPounds(kg) { //Converts kilos to pounds and returns result
  return kg * 2.2; 
}

function poundsToKilos(lbs) { //Converts pounds to kilos and returns result
  return lbs / 2.2;
}

function metricTons(kg) { //Converts kilos to metric tones and returns result
  return Math.floor(kg/1000);
}

let kilosResult = kilosToPounds(2222); // variable holds ...
console.log(kilosResult);

let poundsResult = poundsToKilos(kilosResult);
console.log(poundsResult);

// Printing the result
console.log(metricTons(poundsResult) + " metric tons");