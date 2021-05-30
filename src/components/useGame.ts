import { isWinning, isBoardFull } from './utils';
import { useState } from 'react';
import { GameStatus, Player } from './types';

const useGame = () => {
  const initialBoardState = ['', '', '', '', '', '', '', '', ''];
  const [board, setBoard] = useState<string[]>(initialBoardState);
  const [currentPlayer, setCurrentPlayer] = useState<Player>(Player.X);
  const [status, setStatus] = useState<GameStatus>(GameStatus.Playing);

  const handleCellClick = (clickedIndex: number) => {
    if (
      board[clickedIndex] !== '' ||
      status === GameStatus.Won ||
      status === GameStatus.Draw
    ) {
      return;
    }

    const newBoard = board.map((sign, index) =>
      index !== clickedIndex ? sign : currentPlayer
    );

    setBoard(newBoard);

    if (isWinning(newBoard)) {
      setStatus(GameStatus.Won);
    } else if (isBoardFull(newBoard)) {
      setStatus(GameStatus.Draw);
    } else {
      setCurrentPlayer((prevPlayer) =>
        prevPlayer === Player.X ? Player.O : Player.X
      );
    }
  };

  const handleRestartGame = () => {
    setBoard(initialBoardState);
    setCurrentPlayer(Player.X);
    setStatus(GameStatus.Playing);
  };

  return {
    board,
    status,
    currentPlayer,
    eventHandlers: {
      handleCellClick,
      handleRestartGame,
    },
  };
};

export default useGame;
