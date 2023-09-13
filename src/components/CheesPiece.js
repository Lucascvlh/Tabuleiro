import React from 'react';

const ChessPiece = ({ color }) => {
  const pieceStyle = {
    width: '90%',
    height: '90%',
    borderRadius: '50%',
    boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.5)',
    position: 'relative',
    backgroundColor: color, // Defina a cor diretamente aqui
    margin: '5%'
  };

  return <div style={pieceStyle} />;
};

export default ChessPiece;