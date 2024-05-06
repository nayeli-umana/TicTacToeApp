
import React from 'react';
import Square from './Square';
import styles from './board.module.css';

const Board = ({ squares, onClick }) => {
  // Render each square based on the current game state
  return (
  <div className={styles.board}>
    {squares.map((square, index) => (
      <Square key={index} value={square} onClick={() => onClick(index)} />
    ))}
  </div>
  )
  };

export default Board;

