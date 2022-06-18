import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../components/Home';
import '@testing-library/jest-dom';

describe('Home page test', () => {
  it('Rendered?', () => {
    const page = renderer
      .create(<Home />)
      .toJSON();
    expect(page).toMatchSnapshot();
  });
});
