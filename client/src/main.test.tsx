import { render } from '@testing-library/react';
import { describe, it } from 'vitest';

import App from './App';

function renderComponent() {
  return render(<App />);
}

describe('Main Test Suite', () => {
  it('Renders main', () => {
    const { container } = renderComponent();
    const mainDiv = container.querySelector('#main');

    expect(mainDiv).toBeInTheDocument();
  });
});
