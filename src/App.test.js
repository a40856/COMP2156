import { render, screen } from '@testing-library/react';
import { act } from 'react'; // ✅ Corrected import
import App from './App';

test('renders Student Information System', async () => {
  await act(async () => {
    render(<App />);
  });

  const titleElement = screen.getByText(/Student Information System/i);
  expect(titleElement).toBeInTheDocument();
});
