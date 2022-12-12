import styled from 'styled-components';

export const StyledInput = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 500px;
  margin: 0 auto 20px;

  .inputTitle {
    font-size: 24px;
    white-space: nowrap;
    margin-right: 20px;
  }
  .inputTag {
    height: 35px;
    width: 100%;
    border: 2px solid lightgray;
    border-radius: 6px;
    font-size: 18px;
    font-weight: 500;
  }
  .formInput {
    padding: 8px;
    font-size: 18px;
  }
`;
