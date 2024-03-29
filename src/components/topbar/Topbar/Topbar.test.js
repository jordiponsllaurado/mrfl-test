import { render } from '@testing-library/react';
import Topbar from './Topbar';

const sections = ['facilitate', 'administration', 'invoice', 'bandwidth'];
const onChangeSection = jest.fn();

beforeEach(() => {
  onChangeSection.mockClear();
});

test('renders Topbar', () => {
  const { container } = render(
    <Topbar sections={sections} sectionActive="administration" onChangeSection={onChangeSection} />
  );
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
  const { container } = render(
    <Topbar
      sections={sections}
      sectionActive="administration"
      onChangeSection={onChangeSection}
      {...customizations}
    />
  );
  expect(container).toMatchSnapshot();
});
