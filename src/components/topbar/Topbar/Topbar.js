import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from '../Header';
import SectionMenu from './SectionMenu';

const TopbarWrapper = styled.div`
  ${({ gradient }) => gradient && `background: ${gradient};`}
  ${({ color }) => color && `background: ${color};`}
`;

const Topbar = ({ customizations, sections, sectionActive, onChangeSection }) => {
  const { background, sectionMenu } = customizations;
  return (
    <TopbarWrapper className="topbar" color={background.color} gradient={background.gradient}>
      <Header {...customizations} />
      <SectionMenu
        sections={sections}
        sectionActive={sectionActive}
        onChange={onChangeSection}
        color={sectionMenu.color}
        textSize={sectionMenu.textSize}
      />
    </TopbarWrapper>
  );
};

Topbar.propTypes = {
  customizations: PropTypes.shape({
    logo: PropTypes.shape({
      image: PropTypes.string,
      size: PropTypes.string
    }),
    background: PropTypes.shape({
      color: PropTypes.string,
      gradient: PropTypes.string
    }),
    burgerMenu: PropTypes.shape({
      color: PropTypes.string
    }),
    sectionMenu: PropTypes.shape({
      color: PropTypes.string,
      textSize: PropTypes.string
    })
  }),
  sections: PropTypes.arrayOf(PropTypes.string).isRequired,
  sectionActive: PropTypes.string.isRequired,
  onChangeSection: PropTypes.func.isRequired
};

Topbar.defaultProps = {
  customizations: {
    logo: {
      image: 'https://www.marfeel.com/public/images/landing/header/logo-marfeel.svg',
      size: '40px'
    },
    background: {
      color: 'white'
    },
    burgerMenu: {
      color: 'orange'
    },
    sectionMenu: {
      color: '',
      textSize: '22px'
    }
  }
};
export default Topbar;
