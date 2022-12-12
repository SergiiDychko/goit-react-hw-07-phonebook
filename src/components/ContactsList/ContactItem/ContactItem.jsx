import PropTypes from 'prop-types';
import { StyledContact } from './Styles';
const ContactItem = ({name, number}) => {
    return (
      <StyledContact>
        <p className="contactName">{name}:</p>
        <a className="contactNumber" href={'tel:' + number}>
          {number}
        </a>

      </StyledContact>
    );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;