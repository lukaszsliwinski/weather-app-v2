import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import App from '../App';
import axios from 'axios';
import mockedWeatherResponse from '../__mocks__/mockedWeatherResponse.json';

jest.mock('axios');

const user = userEvent.setup();

describe('Rendering', () => {
  test('Render main screen', () => {
    render(<App />);

    // check if elements are in the document
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
    expect(screen.getByRole('submit')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /www.lukaszsliwinski.pl/i })).toBeInTheDocument();
  });
});

describe('Axios', () => {
  test('Mock weather data', async () => {
    render(<App />);

    // mock search axios response
    const mockedAxios = axios as jest.Mocked<typeof axios>;
    mockedAxios.post.mockResolvedValueOnce(mockedWeatherResponse);

    // simulate search action and check if response renders
    await user.type(screen.getByPlaceholderText('Enter a city'), 'London');
    await user.click(screen.getByRole('submit'));

    // check if elements are in the document
    expect(screen.getByText(/london, gb/i)).toBeInTheDocument();
    expect(screen.getByText(/scattered clouds/i)).toBeInTheDocument();
    expect(screen.getByAltText('General weather icon')).toHaveAttribute(
      'src',
      'http://openweathermap.org/img/wn/03d@2x.png'
    );
  });
});
