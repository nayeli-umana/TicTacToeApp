
import React from 'react';
import styles from './square.module.css';

const Square = ({ value, onClick }) => {
  // Render a clickable square with 'X', 'O', or empty based on the value
  return (
    <button className={styles.square} onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;


