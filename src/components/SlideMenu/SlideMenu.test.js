import { render } from '@testing-library/react';
import SlideMenu from './SlideMenu';

const sections = ['facilitate', 'administration', 'invoice', 'bandwidth'];

test('renders SlideMenu open', () => {
  const { container } = render(
    <SlideMenu sections={sections} sectionActive="administration" open />
  );
  expect(container).toMatchSnapshot();
});

test('renders SlideMenu close', () => {
  const { container } = render(<SlideMenu sections={sections} sectionActive="administration" />);
  expect(container).toMatchSnapshot();
});
