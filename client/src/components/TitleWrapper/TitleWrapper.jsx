import styled from 'styled-components';
import { setTextAlign } from 'utils/styled/center';

const Title = styled.h2`
  text-align: ${setTextAlign};
`;

export function TitleWrapper({ title, center, children }) {
  return (
    <>
      <Title center={center}>{title}</Title>
      {children}
    </>
  );
}

TitleWrapper.defaultProps = {
  center: false,
};
