//! part-1
// const m = 84;
// const n = 75;
const m = 69;
const n = 97;

if (m > n) {
  // console.log("Jim has got the delicious cake.");
} else {
  // console.log("Dela has got the delicious cake.");
}

//! part-2
// let x = 84;
// let y = 99;
// let z = 77;
let x = 69;
let y = 97;
let z = 99;

// ! short way
let topper = Math.max(x, y, z);
// console.log(topper);

// if (x > y && x > z) {
//   console.log("Jim got the cake.");
// } else if (y > x && y > z) {
//   console.log("Dela got the cake.");
// } else {
//   console.log("Chinku got the cake.");
// }

//   let Jim = 69;
//   let Dela = 97;
//   let Chinku = 99;
function topperFunc(Jim, Dela, Chinku) {
  let topper = Math.max(Jim, Dela, Chinku);
  //   console.log(topper);
  if (topper == Jim) {
    console.log("Jim has got");
  } else if (topper == Dela) {
    console.log("Dela has got");
  } else {
    console.log("Chinku has got");
  }
}
topperFunc(69, 98, 93);
