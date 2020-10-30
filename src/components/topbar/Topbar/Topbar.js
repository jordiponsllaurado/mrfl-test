import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from '../Header';

const TopbarWrapper = styled.div`
  ${({ gradient }) => gradient && `background: ${gradient};`}
  ${({ color }) => color && `background: ${color};`}
`;

const Topbar = ({ customizations }) => {
  return (
    <TopbarWrapper
      className="topbar"
      color={customizations.background.color}
      gradient={customizations.background.gradient}
    >
      <Header {...customizations} />
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
    })
  })
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
    }
  }
};
export default Topbar;
