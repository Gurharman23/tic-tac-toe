import Square from "./Square";

export default function Board({
  boardState,
  handleStateChange,
  isXturn,
  gameOver,
}) {
  const handleClick = (index) => {
    if (boardState[index] || gameOver) return;
    const newBoardState = [...boardState];
    newBoardState[index] = isXturn ? "X" : "O";
    handleStateChange(newBoardState, index);
  };

  return (
    <div>
      {!gameOver && <p> Next Player:{isXturn ? "X" : "O"}</p>}
      {gameOver && <p>Game Over: {isXturn ? "O" : "X"} won</p>}
      {/* first row  */}
      <div className="board-row">
        <Square
          key={0}
          value={boardState[0]}
          onSquareClick={() => {
            handleClick(0);
          }}
        />
        <Square
          key={1}
          value={boardState[1]}
          onSquareClick={() => {
            handleClick(1);
          }}
        />
        <Square
          key={2}
          value={boardState[2]}
          onSquareClick={() => {
            handleClick(2);
          }}
        />
      </div>

      {/* 2nd row  */}
      <div className="board-row">
        <Square
          key={3}
          value={boardState[3]}
          onSquareClick={() => {
            handleClick(3);
          }}
        />
        <Square
          key={4}
          value={boardState[4]}
          onSquareClick={() => {
            handleClick(4);
          }}
        />
        <Square
          key={5}
          value={boardState[5]}
          onSquareClick={() => {
            handleClick(5);
          }}
        />
      </div>

      {/* 3rd Row */}
      <div className="board-row">
        <Square
          key={6}
          value={boardState[6]}
          onSquareClick={() => {
            handleClick(6);
          }}
        />
        <Square
          key={7}
          value={boardState[7]}
          onSquareClick={() => {
            handleClick(7);
          }}
        />
        <Square
          key={8}
          value={boardState[8]}
          onSquareClick={() => {
            handleClick(8);
          }}
        />
      </div>
    </div>
  );
}
