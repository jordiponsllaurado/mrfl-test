import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCircle } from '@fortawesome/free-solid-svg-icons';

const BurgerMenu = ({ background, burgerColor, onBurgerClick }) => {
  const handleClick = () => {
    onBurgerClick();
  };

  return (
    <div
      className="burger-menu"
      onClick={handleClick}
      onKeyDown={() => {}}
      role="button"
      tabIndex="0"
    >
      <span className="fa-layers fa-fw fa-2x">
        <FontAwesomeIcon icon={faCircle} style={{ color: background }} size="lg" />
        <FontAwesomeIcon icon={faBars} style={{ color: burgerColor }} size="sm" />
      </span>
    </div>
  );
};

BurgerMenu.propTypes = {
  background: PropTypes.string,
  burgerColor: PropTypes.string,
  onBurgerClick: PropTypes.func
};

BurgerMenu.defaultProps = {
  background: 'white',
  burgerColor: 'orange',
  onBurgerClick: null
};
export default BurgerMenu;
