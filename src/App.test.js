import { render, screen } from '@testing-library/react';
import App from './App';

test('renders UsedCar Market app', () => {
  render(<App />);
  const appElement = document.querySelector('.App');
  expect(appElement).toBeInTheDocument();
});
