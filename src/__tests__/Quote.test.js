import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../components/Quote';
import '@testing-library/jest-dom';

describe('Quote page test', () => {
  it('Quote page render', () => {
    const quotes = renderer
      .create(<Quote />)
      .toJSON();
    expect(quotes).toMatchSnapshot();
  });
});