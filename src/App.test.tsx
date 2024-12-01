import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe("Test App", () => {
  test("Check text Hello world", async () => {
    render(<App />);
    const text = screen.queryByText(/Hello world/i);
    expect(text).toBeNull();
  });

  test('Check "Let me in"', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    const textBtn = 'Let me in';
    const button = screen.getByRole('button');

    expect(button).toHaveTextContent(textBtn);
    expect(button).toMatchSnapshot();
  })
});