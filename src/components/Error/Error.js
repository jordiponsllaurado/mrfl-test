import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBug } from '@fortawesome/free-solid-svg-icons';

const Error = () => {
  return (
    <div className="error-content">
      <FontAwesomeIcon icon={faBug} size="lg" />
      <h1>Sorry, something went wrong!</h1>
    </div>
  );
};

export default Error;
