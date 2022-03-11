import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('render add new node search input', () => {
  const result = render(<App />);
  const searchInput = result.container.querySelector('#node-search');
  expect(searchInput).toBeInTheDocument();
});
