import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  var result=render(<App />);
  expect(result).toBeTruthy();
});
