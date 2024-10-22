/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// Given Parameters
const vel = 10000; // velocity (km/h)
const acc = 3; // acceleration (m/s^2)
const time = 3600; // seconds (1 hour)
const d = 0; // distance (km)
const fuel = 5000; // remaining fuel (kg)
const fbr = 0.5; // fuel burn rate (kg/s)

/* testing for errors within the parameters  */
if(vel<0|| acc<0 || time<0 || d<0|| fuel<0 || fbr<0){
  throw new Error("The PARAMETERS cannot have negative values!!!!!")
}

/* fix the time unit conversion */
const d2 = d + (vel*time/3600) //calcultes new distance /* converted seconds to hours for km/h calculation */

const rf = fuel- (fbr*time) //calculates remaining fuel

/* throwing an error if the remainging fuel is negative */

if(rf <0){
  throw new Error("Insufficient fuel")
}



// Pick up an error with how the function below is called and make it robust to such errors  /* function was called incorrectly applied const */
const calcNewVel = (vel, acc, time) => { 
  /* velocity conversion into km/h */
  return vel + (acc*time * 3600/1000) /* m/s converted to km/h */
}



const vel2 = calcNewVel(vel, acc, time) //calculates new velocity based on acceleration /* had to correct order of calcNewVel parameters  */

console.log(`Corrected New Velocity: ${vel2} km/h`);
console.log(`Corrected New Distance: ${d2} km`);
console.log(`Corrected Remaining Fuel: ${rf} kg`);






