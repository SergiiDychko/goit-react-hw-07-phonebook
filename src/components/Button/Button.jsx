import PropTypes from 'prop-types';
import { StyledButton } from './Styles';

const Button = ({title, type='button', onClick }) => { return (
  <StyledButton className="btn" type={type} onClick={onClick}>
    {title}
  </StyledButton>
);}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;