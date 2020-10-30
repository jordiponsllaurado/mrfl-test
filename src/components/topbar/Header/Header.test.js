import { render } from '@testing-library/react';
import Header from './Header';

test('renders Header', () => {
  const { container } = render(<Header />);
  expect(container).toMatchSnapshot();
});
