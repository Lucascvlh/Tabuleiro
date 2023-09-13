import React from 'react';
import ChessPiece from '@/components/CheesPiece';
import styles from '@/styles/Chessboard.module.css';


const Chessboard = () => {
  const renderSquares = () => {
    const squares = [];

    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const isWhite = (row + col) % 2 === 0;
        let pieceColor = null;

        if ((row < 3) && isWhite) {
          pieceColor = 'red';
        } else if ((row > 4) && isWhite) {
          pieceColor = 'green';
        }

        squares.push(
          <div
            key={`${row}-${col}`}
            className={`${styles.square} ${isWhite ? styles.whiteSquare : styles.blackSquare}`}
          >
            {pieceColor && <ChessPiece color={pieceColor} />}
          </div>
        );
      }
    }

    return squares;
  };

  return <div className={styles.chessboard}>{renderSquares()}</div>;
};

export default Chessboard;