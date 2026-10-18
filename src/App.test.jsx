import { render } from '@testing-library/react';
import App from './App';

test('renders a 9x9 grid of cells', () => {
  const { container } = render(<App />);
  expect(container.querySelectorAll('.cell')).toHaveLength(81);
});
