export const isWinning = (board: string[]): boolean => {
  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  return winningConditions.some((winningCondition) => {
    const a = board[winningCondition[0]];
    const b = board[winningCondition[1]];
    const c = board[winningCondition[2]];

    if (a !== '' && a === b && b === c) {
      return true;
    }

    return false;
  });
};

export const isBoardFull = (board: string[]): boolean => {
  return !board.includes('');
};
