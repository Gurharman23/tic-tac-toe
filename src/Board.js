import Square from "./Square";

export default function Board({
  gameState,
  handleStateChange,
  isXturn,
  gameOver,
}) {
  const setValue = (index) => {
    if (gameState[index] || gameOver) return;
    const newGameState = [...gameState];

    handleStateChange(newGameState, index);
  };

  return (
    <div>
      {!gameOver && <p> Next Player:{isXturn ? "X" : "O"}</p>}
      {gameOver && <p>Game Over: {isXturn ? "O" : "X"} won</p>}
      {/* first row  */}
      <div className="board-row">
        <Square
          key={0}
          value={gameState[0]}
          onSquareClick={() => {
            setValue(0);
          }}
        />
        <Square
          key={1}
          value={gameState[1]}
          onSquareClick={() => {
            setValue(1);
          }}
        />
        <Square
          key={2}
          value={gameState[2]}
          onSquareClick={() => {
            setValue(2);
          }}
        />
      </div>

      {/* 2nd row  */}
      <div className="board-row">
        <Square
          key={3}
          value={gameState[3]}
          onSquareClick={() => {
            setValue(3);
          }}
        />
        <Square
          key={4}
          value={gameState[4]}
          onSquareClick={() => {
            setValue(4);
          }}
        />
        <Square
          key={5}
          value={gameState[5]}
          onSquareClick={() => {
            setValue(5);
          }}
        />
      </div>

      {/* 3rd Row */}
      <div className="board-row">
        <Square
          key={6}
          value={gameState[6]}
          onSquareClick={() => {
            setValue(6);
          }}
        />
        <Square
          key={7}
          value={gameState[7]}
          onSquareClick={() => {
            setValue(7);
          }}
        />
        <Square
          key={8}
          value={gameState[8]}
          onSquareClick={() => {
            setValue(8);
          }}
        />
      </div>
    </div>
  );
}
