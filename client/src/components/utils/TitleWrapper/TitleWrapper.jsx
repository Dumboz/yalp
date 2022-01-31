import { memo } from 'react';
import { getHexaColor } from 'styles/color';
import { TitleContainer, Title } from './TitleWrapper.styled';
import PropTypes from 'prop-types';

function TitleWrapper({
  title,
  center,
  size,
  margin,
  containerMargin,
  as,
  color,
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
  size: 20,
  margin: 0,
  as: 'h2',
  color: getHexaColor('gray', 500),
};

TitleWrapper.propTypes = {
  center: PropTypes.bool,
  size: PropTypes.number,
  margin: PropTypes.number,
  containerMargin: PropTypes.number,
  as: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.any,
};

export default memo(TitleWrapper);
