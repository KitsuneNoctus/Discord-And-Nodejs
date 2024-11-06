function kilosToPounds(kg) {
  return kg * 2.2; 
}

function poundsToKilos(lbs) {
  return lbs / 2.2;
}

function metricTons(kg) {
  return Math.floor(kg/1000);
}

let kilosResult = kilosToPounds(2222);
console.log(kilosResult);

let poundsResult = poundsToKilos(kilosResult);
console.log(poundsResult);

console.log(metricTons(poundsResult) + " metric tons");