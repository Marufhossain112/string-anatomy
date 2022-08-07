//!  reverse an array
let lyrics = "tumi bondhu kala pakhi , ami jeno ki.";
for (let i = lyrics.length; i >= 0; i--) {
  console.log(lyrics[i]);
}

//!  reverse every word
let words = lyrics.split(" ");
console.log(words);
for(let i = words.length-1; i>=0 ; i--){
    console.log(words[i]);
};
