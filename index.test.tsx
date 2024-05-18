import React from 'react';
import {App} from './index';
import {render, screen} from './test/test.utils';

describe('index', () => {
  it('should work', () => {
    render(<App />);

    expect(screen.getByText('123')).toBeTruthy();
  });
});
