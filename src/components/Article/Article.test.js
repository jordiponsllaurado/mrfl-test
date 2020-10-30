import { render } from '@testing-library/react';
import Article from './Article';

test('renders Article with an image', () => {
  const image = {
    imageUrl: 'https://picsum.photos/200/300',
    altValue: 'Google'
  };
  const { container } = render(
    <Article title="Article title" description="Article description" image={image} />
  );
  expect(container).toMatchSnapshot();
});

test('renders Article without an image', () => {
  const { container } = render(<Article title="Article title" description="Article description" />);
  expect(container).toMatchSnapshot();
});
