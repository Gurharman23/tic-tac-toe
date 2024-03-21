import { useState } from "react";
import Board from "./Board";
import History from "./History";
import calculateWinner from "./calculateWinner";

export const App = () => {
  const [histories, setHistories] = useState([new Array(9).fill(null)]);
  const [gameState, setGameState] = useState(histories[0]);
  const [isXturn, setXturn] = useState(false);
  const [selectedHistoryIndex, setSelectedHistoryIndex] = useState(-1);
  const [gameOver, setGameOver] = useState(false);
  const handleStateChange = (newGameState, index) => {
    newGameState[index] = isXturn ? "X" : "O";
    const isWinner = calculateWinner({
      gameState: newGameState,
      player: newGameState[index],
    });
    if (isWinner) setGameOver(true);
    if (selectedHistoryIndex > -1) {
      setHistories([
        ...histories.slice(0, selectedHistoryIndex + 1),
        newGameState,
      ]);
      setGameState(newGameState);
      setSelectedHistoryIndex(-1);
      return;
    }
    setXturn(!isXturn);
    setGameState(newGameState);
    setHistories([...histories, newGameState]);
  };
  return (
    <div className="game">
      <Board
        gameState={gameState}
        handleStateChange={handleStateChange}
        isXturn={isXturn}
        gameOver={gameOver}
      />
      <History
        histories={histories}
        onSelectHistory={(selectedHistory, index) => {
          setGameState([...selectedHistory]);
          setSelectedHistoryIndex(index);
          setXturn(index % 2 === 0 ? false : true);
          if (gameState !== selectedHistory) setGameOver(false);
        }}
      />
    </div>
  );
};

export default App;
