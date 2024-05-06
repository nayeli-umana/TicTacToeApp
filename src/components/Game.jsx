
import React, { useState } from 'react';
import Board from './Board';
import styles from './game.module.css';

const Game = () => {
  // State hooks to manage game state
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  // Handle click event when a square is clicked
  const handleClick = (i) => {
    const newSquares = [...squares];
    // Check if there's already a winner or the square is already filled
    if (calculateWinner(newSquares) || newSquares[i]) {
      return;
    }
    // Update the square with 'X' or 'O' based on the current player
    newSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(newSquares); // Update the game board state
    setXIsNext(!xIsNext);   // Toggle the current player
  };

  // Function to calculate the winner based on current game state
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let line of lines) {
      const [a, b, c] = line;
      // Check if there's a winning line
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]; // Return the winner (either 'X' or 'O')
      }
    }
    // Check for tie condition
    if (squares.every((square) => square !== null)) {
      return 'tie'; // Return 'tie' if all squares are filled with no winner
    }
    return null;
  };

  // Determine the status message to display based on game state
  const winner = calculateWinner(squares);
  //const status = winner ? `Winner: ${winner}` : `Next Player: ${xIsNext ? 'X' : 'O'}`;
  const status = `Next Player: ${xIsNext ? 'X' : 'O'}`;

  return (
    <div className={styles.gameContainer}>
      <Board squares={squares} onClick={handleClick} />
      <div className={styles.status}>{status}</div>
      {winner && (
        <div className={styles.winMessage}>
          {/* Display appropriate win message based on winner */}
          🎉 {winner === 'tie' ? "It's a tie!" : `${winner} Wins!`} 🎉
        </div>
      )}
    </div>
  );
};

export default Game;
