import { render } from '@testing-library/react';
import Error from './Error';

test('renders Error component', () => {
  const { container } = render(<Error />);
  expect(container).toMatchSnapshot();
});
