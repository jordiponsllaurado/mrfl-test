import PropTypes from 'prop-types';
import styled from 'styled-components';
import BurgerMenu from '../../BurgerMenu';

const LogoWrapper = styled.img`
  height: ${prop => prop.size};
`;

const Header = ({ logo, background, burgerMenu }) => {
  return (
    <div className="header">
      <BurgerMenu background={background.color} burgerColor={burgerMenu.color} />
      <LogoWrapper src={logo.image} alt="Marfeel" size={logo.size} />
    </div>
  );
};

Header.propTypes = {
  logo: PropTypes.shape({
    image: PropTypes.string,
    size: PropTypes.string
  }),
  background: PropTypes.shape({
    color: PropTypes.string
  }),
  burgerMenu: PropTypes.shape({
    color: PropTypes.string
  })
};

Header.defaultProps = {
  logo: {
    image: 'https://www.marfeel.com/public/images/landing/header/logo-marfeel.svg',
    size: '40px'
  },
  background: {
    color: 'white'
  },
  burgerMenu: {
    color: 'orange'
  }
};

export default Header;
