import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, screen } from '@testing-library/react';
import Button from '../components/Button';
import '@testing-library/jest-dom';

describe('Button componenet testing', () => {
  const RESULT = jest.fn();

  it('Rendered', () => {
    const BUTTON = renderer
      .create(<Button eventHandler={RESULT} value="Test" />)
      .toJSON();
    expect(BUTTON).toMatchSnapshot();
  });

  it('Click', () => {
    render(<Button eventHandler={RESULT} value="Test" />);
    fireEvent.click(screen.getByText('Test'));
    fireEvent.click(screen.getByText('Test'));
    fireEvent.click(screen.getByText('Test'));
    fireEvent.click(screen.getByText('Test'));
    expect(RESULT).toHaveBeenCalledTimes(4);
  });
});
