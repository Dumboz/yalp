import { getHexaColor } from 'styles/color';
import { TitleContainer, Title } from './TitleWrapper.styled';

export function TitleWrapper({
  title,
  center,
  size = 20,
  margin = 0,
  containerMargin,
  as = 'h2',
  color = getHexaColor('gray', 500),
  children,
}) {
  return (
    <TitleContainer containerMargin={containerMargin} color={color}>
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
