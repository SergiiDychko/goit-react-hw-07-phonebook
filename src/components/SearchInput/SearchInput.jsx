import { useSelector, useDispatch } from 'react-redux';
import { change } from '../../redux/slice';

import { StyledInput } from './Styles';


const SearchInput = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  
  const handleChange = (evt) => dispatch(change(evt.target.value));

  return (
    <StyledInput>
      <p className="inputTitle">Filter by name:</p>
      <input
        className="inputTag"
        type="text"
        name="filter"
        title="Please enter the name"
        onChange={handleChange}
        value={filter}
      />
    </StyledInput>
  );
};

export default SearchInput;