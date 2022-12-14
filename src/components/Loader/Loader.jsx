import { ThreeDots } from 'react-loader-spinner';
import { StyledLoader } from './LoaderStyles';

export default function Loader() {
  return (
    <StyledLoader>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="greenyellow"
        ariaLabel="three-dots-loading"
      />
    </StyledLoader>
  );
}