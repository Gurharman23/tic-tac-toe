import { useState } from "react";
import Board from "./Board";
import History from "./History";
import calculateWinner from "./calculateWinner";

export const App = () => {
  const [histories, setHistories] = useState([new Array(9).fill(null)]);
  const [isXturn, setXturn] = useState(false);
  const [selectedHistoryIndex, setSelectedHistoryIndex] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const handleStateChange = (newBoardState, index) => {
    const isWinner = calculateWinner({
      gameState: newBoardState,
      player: newBoardState[index],
    });
    if (isWinner) setGameOver(true);
    setXturn(!isXturn);
    const newHistories = [
      ...histories.slice(0, selectedHistoryIndex + 1),
      newBoardState,
    ];
    setHistories(newHistories);
    setSelectedHistoryIndex(newHistories.length - 1);
  };
  return (
    <div className="game">
      <Board
        boardState={histories[selectedHistoryIndex]}
        handleStateChange={handleStateChange}
        isXturn={isXturn}
        gameOver={gameOver}
        x
      />
      <History
        histories={histories}
        onSelectHistory={(index) => {
          setSelectedHistoryIndex(index);
          setXturn(index % 2 === 0 ? false : true);
          if (index !== selectedHistoryIndex) setGameOver(false);
        }}
      />
    </div>
  );
};

export default App;
