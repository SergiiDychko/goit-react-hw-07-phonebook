import styled from 'styled-components';

export const StyledButton = styled.button`
  border: none;
  outline: none;
  border-radius: 6px;
  padding: 10px 20px;
  background-color: darkseagreen;
  font-size: 16px;
  font-weight: 700;
  color: whitesmoke;
  :hover {
    box-shadow: inset 0px 0px 10px 5px rgba(0, 0, 0, 0.1);
  }
`;