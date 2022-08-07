//! Math.pow
let see = Math.pow(2, 4);
console.log(see); /* ans is 16 */
//! Math.abs
let abs = Math.abs(-20);
console.log(abs);/* ans is 20 */
// ! Math.round
let round = Math.round(4.67);
console.log(round);/* ans is 5 */
// !Math.ceil
round = Math.ceil(4.67);
console.log(round); /* ans is 5 */
//! Math.floor
round = Math.floor(4.67);
console.log(round); /* ans is 4 */
// ! Math.random
random = Math.random(); /* any numbers from 0 to 1 */
random = Math.random() * 10; /* any numbers from 0 to 10 */
console.log(random);
for (let i = 0; i <= 20; i++) {
  random = Math.random() * 10; /* any numbers from 0 to 10 */
  console.log(Math.round(random));
}
