import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { StyledMenu } from './SlideMenu.styled';

const SlideMenu = ({ isOpen, sections, sectionActive, onClickOutside }) => {
  const wrapperRef = useRef();

  const renderItem = item => {
    const className = `section ${sectionActive === item ? 'active' : ''}`;
    return (
      <a href="/" className={className} key={item}>
        {item}
      </a>
    );
  };

  const handleClickOutside = event => {
    if (wrapperRef && !wrapperRef.current.contains(event.target)) {
      onClickOutside();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  return (
    <StyledMenu open={isOpen} className="slide-menu" ref={wrapperRef}>
      <div className="slide-header">
        <img
          src="https://www.marfeel.com/public/images/landing/header/logo-marfeel.svg"
          alt="Marfeel"
        />
      </div>
      <div className="sections">{sections.map(renderItem)}</div>
    </StyledMenu>
  );
};

SlideMenu.propTypes = {
  isOpen: PropTypes.bool,
  sections: PropTypes.arrayOf(PropTypes.string).isRequired,
  sectionActive: PropTypes.string.isRequired,
  onClickOutside: PropTypes.func
};

SlideMenu.defaultProps = {
  isOpen: false,
  onClickOutside: null
};
export default SlideMenu;
