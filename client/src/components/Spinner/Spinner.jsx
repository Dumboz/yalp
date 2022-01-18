import { Wrapper as SpinnerWrapper } from './Spinner.styled';

export const Spinner = ({ height = 22 }) => {
  return (
    <SpinnerWrapper height={height}>
      <svg className="spinner" viewBox="0 0 50 50">
        <circle
          className="path"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="5"></circle>
      </svg>
    </SpinnerWrapper>
  );
};
