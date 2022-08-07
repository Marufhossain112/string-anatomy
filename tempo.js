let first = 5;
let second = 8;
// !wrong approch to destructure
first = second;
second = first;
console.log(first);
console.log(second);
// ! This is the right approch
let temp = first;
first = second;
second = temp;
console.log(first);
console.log(second);
//! This is also right approch
[first, second] = [second, first];
console.log(first, second);
