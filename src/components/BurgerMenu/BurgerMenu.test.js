import { render } from '@testing-library/react';
import BurgerMenu from './BurgerMenu';

test('renders Burger Menu with default values', () => {
  const { container } = render(<BurgerMenu background="red" burgerColor="orange" />);
  expect(container).toMatchSnapshot();
});

test('renders Burger Menu with default values', () => {
  const { container } = render(<BurgerMenu />);
  expect(container).toMatchSnapshot();
});
