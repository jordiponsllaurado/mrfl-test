import { render } from '@testing-library/react';
import Topbar from './Topbar';

test('renders Topbar', () => {
  const { container } = render(<Topbar />);
  expect(container).toMatchSnapshot();
});

test('renders Topbar with customizations', () => {
  const customizations = {
    logo: {
      image: 'imageUrl',
      size: '30px'
    },
    bacground: {
      color: 'green'
    },
    burgerMenu: {
      color: 'black'
    }
  };
  const { container } = render(<Topbar {...customizations} />);
  expect(container).toMatchSnapshot();
});
