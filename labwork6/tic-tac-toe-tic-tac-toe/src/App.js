import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Board />
    </div>
  );
}

function Square({ value, onSquareClick }) {
  return (
    <button className='square' onClick={onSquareClick}>{value}</button>
  );
}

function Board() {
  const [history, setHistory] = useState([{ squares: Array(9).fill('') }]);
  const [currentMove, setCurrentMove] = useState(0);
  const [onPlay, setOnPlay] = useState(true);
  const [whoIsNext, setNext] = useState(true);
  const [gameStatus, setGameStatus] = useState('');

  const squares = history[currentMove].squares;

  function checkWinner(squares) {
    const winLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < winLines.length; i++) {
      const [a, b, c] = winLines[i];
      if (squares[a] === squares[b] && squares[a] === squares[c] && squares[a] !== '')
        return squares[a];
    }

    if (!squares.includes('')) {
      return 'Nobody';
    }
    return null;
  }

  function onSquareClick(i) {
    if (squares[i] === '' && onPlay) {
      const newSquares = squares.slice();
      newSquares[i] = whoIsNext ? 'X' : 'O';
      const newHistory = history.slice(0, currentMove + 1).concat([{ squares: newSquares }]);

      setHistory(newHistory);
      setCurrentMove(newHistory.length - 1);
      setNext(!whoIsNext);
      afterClick(newSquares);
    }
  }

  function afterClick(squares) {
    const winner = checkWinner(squares);
    if (winner) {
      setOnPlay(false);
      setGameStatus(winner === 'Nobody' ? 'Nobody wins!' : `${winner} wins!`);
    } else {
      setGameStatus(`Next turn: ${whoIsNext ? 'O' : 'X'}`);
    }
  }

  function restartGame() {
    setHistory([{ squares: Array(9).fill('') }]);
    setCurrentMove(0);
    setOnPlay(true);
    setNext(true);
    setGameStatus('');
  }

  function jumpTo(move) {
    setCurrentMove(move);
    setOnPlay(move === history.length - 1);
    setNext(move % 2 === 0);
    const winner = checkWinner(history[move].squares);
    setGameStatus(winner ? (winner === 'Nobody' ? 'Nobody wins!' : `${winner} wins!`) : `Next turn: ${move % 2 === 0 ? 'X' : 'O'}`);
  }

  return (
    <>
      <div className='board'>
        <div className='row'>
          <Square value={squares[0]} onSquareClick={() => onSquareClick(0)} />
          <Square value={squares[1]} onSquareClick={() => onSquareClick(1)} />
          <Square value={squares[2]} onSquareClick={() => onSquareClick(2)} />
        </div>
        <div className='row'>
          <Square value={squares[3]} onSquareClick={() => onSquareClick(3)} />
          <Square value={squares[4]} onSquareClick={() => onSquareClick(4)} />
          <Square value={squares[5]} onSquareClick={() => onSquareClick(5)} />
        </div>
        <div className='row'>
          <Square value={squares[6]} onSquareClick={() => onSquareClick(6)} />
          <Square value={squares[7]} onSquareClick={() => onSquareClick(7)} />
          <Square value={squares[8]} onSquareClick={() => onSquareClick(8)} />
        </div>
      </div>
      <h5 className='status'>{gameStatus}</h5>
      <button onClick={restartGame}>Restart!</button>
      <div>
        <h3>Move History</h3>
        {history.map((_, move) => (
          <button key={move} onClick={() => jumpTo(move)}>
            Go to move #{move}
          </button>
        ))}
      </div>
    </>
  );
}

export default App;