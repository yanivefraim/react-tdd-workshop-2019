import { gameStatus } from './gameService';

test('X should win', () => {
  const board = [['X', 'X', 'X'], ['', '', ''], ['', '', '']];
  expect(gameStatus(board)).toBe('X');
});
