const calculateWinner = ({ gameState, player = "0" }) => {
  const winnerCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (const winnerCombination of winnerCombinations) {
    const [a, b, c] = winnerCombination;
    if (
      gameState[a] === player &&
      gameState[b] === player &&
      gameState[c] === player
    )
      return true;
  }
  return false;
};

export default calculateWinner;
