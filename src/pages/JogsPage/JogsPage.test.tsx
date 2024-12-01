import { render, screen } from '@testing-library/react';
import JogsPage from './index';
import { MemoryRouter } from 'react-router-dom';
import { authAxios } from '../../services/axiosInstance'
import { Jog } from '../../models/jogs';

jest.mock('../../services/axiosInstance');
const mockedAuthAxios = authAxios as jest.Mocked<typeof authAxios>;
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzQzNTZmOTMzNjRiMWY3ZmNjZTA0NmEiLCJ1c2VybmFtZSI6ImFsZXgiLCJjcmVhdGVkQXQiOiIyMDI0LTExLTI0VDE2OjQwOjI1LjAxMFoiLCJ1cGRhdGVkQXQiOiIyMDI0LTExLTI0VDE2OjQwOjI1LjAxMFoiLCJpYXQiOjE3MzMwNzQ1MTB9.4rbD8LQ0MBwwdx8hX1ZU3r0_OtSTklN59focIfpOh_Y'

describe("Test Jogs page", () => {
  let response: {data: {jogs: Jog[] }} = {data: { jogs: []}}
  beforeEach(() => {
    window.localStorage.setItem('token', token);
    response = {
      data: {
        jogs: [
          {
            "id": "674880c0fdeafecbef4cebb1",
            "distance": 97,
            "time": 10,
            "speed": 34.92,
            "date": "2024-12-01T00:00:00.000Z",
            "userId": "674356f93364b1f7fcce046a",
            "createdAt": "2024-11-28T14:40:00.024Z",
            "updatedAt": "2024-11-30T22:47:25.139Z"
          },
          {
            "id": "6748a5f9fdeafecbef4cecae",
            "distance": 6.2,
            "time": 1.5,
            "speed": 14.88,
            "date": "2024-11-28T00:00:00.000Z",
            "userId": "674356f93364b1f7fcce046a",
            "createdAt": "2024-11-28T17:18:49.059Z",
            "updatedAt": "2024-11-28T17:18:49.059Z"
          },
        ]
      }

    }
  });

  afterEach(() => {
    jest.clearAllMocks();
    window.localStorage.clear();
  });

  test('Check header`s links on Jogs page', async () => {
    render(
      <MemoryRouter initialEntries={['/jogs']}>
        <JogsPage />
      </MemoryRouter>
    );

    const linkJogs = screen.getAllByText(/jogs/i);
    const linkInfo = screen.getAllByText(/info/i);

    expect(linkInfo.length).toBeGreaterThan(0);
    expect(linkJogs.length).toBeGreaterThan(0);
  });

  test("Check fetch jogs", async () => {
    mockedAuthAxios.get.mockResolvedValue(response);
    render(
      <MemoryRouter initialEntries={['/jogs']}>
        <JogsPage />
      </MemoryRouter>
    );

    const button = await screen.findByTestId('add-jog-btn')
    const jogs = await screen.findAllByTestId('jog-card')
    screen.debug();

    expect(button).toBeInTheDocument();
    expect(jogs.length).toBe(response.data.jogs.length);
    expect(mockedAuthAxios.get).toBeCalledTimes(1);
  })
});