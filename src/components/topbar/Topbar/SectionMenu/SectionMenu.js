import PropTypes from 'prop-types';
import styled from 'styled-components';

const SectionWrapper = styled.a`
  ${({ color }) => color && `color: ${color};`}
  ${({ textSize }) => textSize && `font-size: ${textSize};`}
  ${({ active, underlineColor }) => active && `border-bottom: 3px solid ${underlineColor}`}
`;

const SectionMenu = ({ sections, sectionActive, onChange, color, textSize }) => {
  const renderItem = item => {
    const className = `section-item${sectionActive === item ? ' active' : ''}`;

    const handleChange = e => {
      onChange(e.target.innerHTML);
    };

    return (
      <SectionWrapper
        key={item}
        className={className}
        active={sectionActive === item ? 'active' : ''}
        onClick={handleChange}
        color={color}
        underlineColor={color || 'orange'}
        textSize={textSize}
      >
        {item}
      </SectionWrapper>
    );
  };

  return <div className="section-menu">{sections.map(renderItem)}</div>;
};

SectionMenu.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.string).isRequired,
  sectionActive: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  color: PropTypes.string,
  textSize: PropTypes.string
};

SectionMenu.defaultProps = {
  color: '',
  textSize: '22px'
};
export default SectionMenu;
