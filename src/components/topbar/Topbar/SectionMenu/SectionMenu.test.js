import { render } from '@testing-library/react';
import SectionMenu from './SectionMenu';

const sections = ['facilitate', 'administration', 'invoice', 'bandwidth'];
const onChangeSection = jest.fn();

beforeEach(() => {
  onChangeSection.mockClear();
});

test('renders Section Menu', () => {
  const { container } = render(
    <SectionMenu sections={sections} sectionActive="administration" onChange={onChangeSection} />
  );
  expect(container).toMatchSnapshot();
});

test('renders Section Menu with customizations', () => {
  const { container } = render(
    <SectionMenu
      sections={sections}
      sectionActive="facilitate"
      onChange={onChangeSection}
      color="green"
      textSize="12px"
    />
  );
  expect(container).toMatchSnapshot();
});
