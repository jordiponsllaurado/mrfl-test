import PropTypes from 'prop-types';
import styled from 'styled-components';
import BurgerMenu from '../../BurgerMenu';
import Header from '../Header';
import SectionMenu from './SectionMenu';

const TopbarWrapper = styled.div`
  ${({ gradient }) => gradient && `background: ${gradient};`}
  ${({ color }) => color && `background: ${color};`}
`;

const Topbar = ({
  customizations,
  sections,
  sectionActive,
  onChangeSection,
  sectionVisible,
  headerVisible,
  onBurgerClick
}) => {
  const { background, sectionMenu, burgerMenu } = customizations;

  if (!headerVisible) {
    return (
      <div className="topbar">
        <BurgerMenu
          background={background.color}
          burgerMenu={burgerMenu.color}
          onBurgerClick={onBurgerClick}
        />
      </div>
    );
  }

  return (
    <TopbarWrapper className="topbar" color={background.color} gradient={background.gradient}>
      <Header onBurgerClick={onBurgerClick} {...customizations} />
      {sectionVisible && (
        <SectionMenu
          sections={sections}
          sectionActive={sectionActive}
          onChange={onChangeSection}
          color={sectionMenu.color}
          textSize={sectionMenu.textSize}
        />
      )}
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
  onChangeSection: PropTypes.func.isRequired,
  sectionVisible: PropTypes.bool,
  headerVisible: PropTypes.bool,
  onBurgerClick: PropTypes.func
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
  },
  sectionVisible: true,
  headerVisible: true,
  onBurgerClick: null
};
export default Topbar;
