import styled from 'styled-components';
import { setTextAlign } from 'utils/styled/center';

const Title = styled.h2`
  text-align: ${setTextAlign};
  font-size: ${({ size }) => size}px;
  line-height: 1.5;
  margin: ${({ margin }) => margin}px 0;
  font-weight: 900;
`;

const TitleContainer = styled.div`
  width: 100%;
  margin: 20px;
`;

export function TitleWrapper({
  title,
  center,
  size = 20,
  margin = 0,
  children,
}) {
  return (
    <TitleContainer>
      <Title center={center} size={size} margin={margin}>
        {title}
      </Title>
      {children}
    </TitleContainer>
  );
}

TitleWrapper.defaultProps = {
  center: false,
};
