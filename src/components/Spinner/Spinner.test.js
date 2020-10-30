import { render } from '@testing-library/react';
import Spinner from './Spinner';

test('renders Spinner', () => {
  const { container } = render(<Spinner />);
  expect(container).toMatchSnapshot();
});
