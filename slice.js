let lyrics = "amar sona bondhu re tumi kothay roila re.";
let slice = lyrics.slice(
  //! slice count minus(-) value from the last of the string . But if minus value is used on start value then it won't work
  6,  -9); /* 5 is the starting index and 9-1 is the ending index. */
// console.log(slice);
let substring = lyrics.substring(5, -6); //!substring does not count minus(-) value
// console.log(substring);
let substr = lyrics.substr(-15, 2);
console.log(substr);
