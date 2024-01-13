// Import the Spinner component into this file and test
// that it renders what it should for the different props it can take.
import React from 'react';
import { render, screen } from '@testing-library/react';
import Spinner from './Spinner';
import '@testing-library/jest-dom';

test('Spinner reacts to "on" prop changes', () => {
  // Initial render with "on" prop as false
  const { rerender, container } = render(<Spinner on={false} />); // Capture container here
  
  // Assert that spinner is not rendered initially
  let spinnerElement = screen.queryByTestId('spinner');
  expect(spinnerElement).not.toBeInTheDocument();

  // Re-render with "on" prop as true
  rerender(<Spinner on={true} />);

  // Assert that spinner is rendered after prop change
  spinnerElement = container.querySelector('#spinner'); // Use the container to query the DOM
  expect(spinnerElement).toBeInTheDocument();
});
