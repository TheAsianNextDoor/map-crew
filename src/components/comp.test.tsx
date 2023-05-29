import { render, screen } from '@testing-library/react';

import { Comp } from './comp';

test('hello', async () => {
  render(<Comp />);

  expect(await screen.findByText('hello')).toBeVisible();
});
