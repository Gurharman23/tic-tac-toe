const History = ({ histories, onSelectHistory }) => {
  return (
    <div className="game-info">
      <ol>
        {histories.map((history, index) => {
          let text = `Move ${index}`;
          if (index === 0) text = "Start Game";
          return (
            <li key={index}>
              <button onClick={() => onSelectHistory(history, index)}>
                Go to {text}
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default History;
