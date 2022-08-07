// includes
let lyrics =
  "Tumi bondhu kala pakhi , ami jeno ki. bosonto batase Tumay bolte pari ni. Sada sada kala kala rong jomeche sada kala.";
let searchString = "tumi";
let lyricsLowerCase = lyrics.toLowerCase();
let StringLowercase = lyricsLowerCase.toLowerCase();
let result = lyricsLowerCase.includes(StringLowercase);
 result = lyrics.toLowerCase().includes(searchString.toLowerCase());
console.log(result);

// indexOf
let lyricsIndex = lyrics.indexOf("pakhi");
console.log(lyricsIndex);

// startsWith
let isStart = lyrics.startsWith("Tumi");
isStart = lyrics.startsWith("2mi");
console.log(isStart);

// endsWith
let isEnd = lyrics.endsWith("kala.");
console.log(isEnd);
