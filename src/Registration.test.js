import React from 'react';
import { Registration } from './Registration';
import { render, cleanup, fireEvent } from 'react-testing-library';

afterEach(cleanup);
test('should not register a game if no names', () => {
  const onNewGame = jest.fn();

  const { getByText } = render(<Registration onNewGame={onNewGame} />);
  fireEvent.click(getByText('new game'));
  expect(onNewGame).not.toHaveBeenCalled();
});
