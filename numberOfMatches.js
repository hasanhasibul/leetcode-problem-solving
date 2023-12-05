const numberOfMatches = function (n) {
  let countMatches = 0;
  let numberOfTeam = n;
  let playedTeam = 0;
  while (playedTeam <= n) {
    const matches = Math.floor(numberOfTeam / 2);
    const teamAdvance = numberOfTeam % 2;
    numberOfTeam = matches + teamAdvance;
    playedTeam = playedTeam + teamAdvance;
    countMatches = countMatches + matches;
  }
  return countMatches;
};

const n = 9;

console.log(numberOfMatches(n));
