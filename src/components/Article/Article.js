import PropTypes from 'prop-types';

const Article = ({ title, description, image }) => {
  return (
    <div className="article">
      {image && (
        <div className="article-image">
          <img src={image.imageUrl} alt={image.altValue} />
        </div>
      )}
      <div className="article-content">
        <div className="article-title">{title}</div>
        <div className="article-description">{description}</div>
      </div>
    </div>
  );
};

Article.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.shape({
    imageUrl: PropTypes.string,
    altValue: PropTypes.string
  })
};

Article.defaultProps = {
  image: null
};

export default Article;
