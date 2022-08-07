// split
let lyrics =
  "Tumi bondhu kala pakhi , ami jeno ki. bosonto batase Tumay bolte pari ni. Sada sada kala kala rong jomeche sada kala.";
let splitted =
  lyrics.split(
    "."
  ); /* break every line on particular point , such as here is "." , you can give " " also. */
splitted =
  lyrics.split(
    " "
  ); /* break every word , such as here is " " , you can give "" also. */
splitted = lyrics.split(""); /* break every character . */
// console.log(splitted);

