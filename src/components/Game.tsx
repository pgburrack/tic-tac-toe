import React from 'react';
import styled from 'styled-components';
import Board from './Board';
import { GameStatus } from './types';
import useGame from './useGame';

const Center = styled.div`
  text-align: center;
`;

const Game = () => {
  const { board, eventHandlers, status, currentPlayer } = useGame();

  return (
    <Center>
      <h1>Tic Tac Toe</h1>
      <Board data={board} onCellClick={eventHandlers.handleCellClick} />
      <h2>
        {status === GameStatus.Playing ? `It is ${currentPlayer} turn` : null}
        {status === GameStatus.Won ? `${currentPlayer} has Won!` : null}
        {status === GameStatus.Draw ? `It is a draw` : null}
      </h2>
      <button onClick={eventHandlers.handleRestartGame}>Restart Game</button>
    </Center>
  );
};

export default Game;
