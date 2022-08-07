// let gamePoints = [20, 13, 37];
let gamePoints = [5, 25, 27, 33, 10, 15];

function totalPoints(gameScores) {
  let total = 0;
  for (let i = 0; i < gameScores.length; i++) {
    //   console.log(gameScores[i);
    total = total + gameScores[i];
  }
  return total;
}
let totalScore = totalPoints(gamePoints);
console.log(totalScore);
