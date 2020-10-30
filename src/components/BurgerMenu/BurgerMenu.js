import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCircle } from '@fortawesome/free-solid-svg-icons';

const BurgerMenu = ({ background, burgerColor }) => {
  return (
    <div className="burger-menu">
      <span className="fa-layers fa-fw fa-2x">
        <FontAwesomeIcon icon={faCircle} style={{ color: background }} size="lg" />
        <FontAwesomeIcon icon={faBars} style={{ color: burgerColor }} size="sm" />
      </span>
    </div>
  );
};

BurgerMenu.propTypes = {
  background: PropTypes.string,
  burgerColor: PropTypes.string
};

BurgerMenu.defaultProps = {
  background: 'white',
  burgerColor: 'orange'
};
export default BurgerMenu;
