import styled from 'styled-components';
import { setTextAlign } from 'utils/styled/center';

const Title = styled.h2`
  text-align: ${setTextAlign};
  font-size: ${({ size }) => size}px;
  line-height: 1.5;
  font-weight: 900;
  margin: ${({ margin }) => margin};
`;

const TitleContainer = styled.div`
  width: 100%;
`;

export function TitleWrapper({
  title,
  center,
  size = 20,
  margin = 0,
  children,
  as = 'h2',
}) {
  return (
    <TitleContainer>
      <Title as={as} center={center} size={size} margin={margin}>
        {title}
      </Title>
      {children}
    </TitleContainer>
  );
}

TitleWrapper.defaultProps = {
  center: false,
};
