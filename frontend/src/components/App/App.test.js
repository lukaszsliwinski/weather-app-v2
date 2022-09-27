import ReactDOM from 'react-dom/client';
import { screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

import App from './App';


let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});


it('render search input component when app runs', () => {
    act(() => {
      ReactDOM.createRoot(container).render(<App />);
    });

    const searchInput = screen.getByTestId('search-input');

    expect(searchInput).toBeInTheDocument();
});


it('focus input on hover', () => {
  act(() => {
    ReactDOM.createRoot(container).render(<App />);
  });

  const formControl = screen.getByTestId('form-control');

  fireEvent.mouseOver(formControl);
  expect(formControl).toHaveFocus();
  
  fireEvent.mouseLeave(formControl);
  expect(formControl).not.toHaveFocus();
});