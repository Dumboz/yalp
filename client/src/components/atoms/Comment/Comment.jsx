import { Icon, A11yHidden, Skeleton } from 'components';
import { Description } from './Comment.styled';
import { getHexaColor } from 'styles/color';
import PropTypes from 'prop-types';
import { memo } from 'react';

const cutText = (text, limit) => text.trim().slice(0, limit) + '...';

function Comment({
  iconType,
  title,
  limit,
  size,
  children,
  color,
  as,
  fontWeight,
  marginRight,
}) {
  const CustomComment = iconType || title ? 'p' : 'span';

  return (
    <Description
      as={as}
      size={size}
      color={color}
      fontWeight={fontWeight}
      marginRight={marginRight}
    >
      {iconType && <Icon type={iconType} size={size} color={color} />}
      {title && <A11yHidden as="h3">{title}</A11yHidden>}
      {children ? (
        <CustomComment>
          {children?.length > limit
            ? `"${cutText(children, limit)}"`
            : children}
        </CustomComment>
      ) : (
        <Skeleton />
      )}
    </Description>
  );
}
Comment.defaultProps = {
  limit: 180,
  size: 16,
  color: getHexaColor('gray', 500),
  fontWeight: 500,
  marginRight: 0,
};

Comment.propTypes = {
  title: PropTypes.string,
  children: PropTypes.string.isRequired,
  iconType: PropTypes.oneOf([
    '',
    'calendar',
    'fire',
    'follower',
    'gallery',
    'pencil',
    'photo',
    'reviews',
    'save',
    'search',
    'share',
    'fillstar',
    'leftarrow',
    'rightarrow',
    'star',
    'talk',
    'dropdown',
    'done',
    'loading',
    'close',
    'claimed',
  ]),
  limit: PropTypes.number,
  size: PropTypes.number || PropTypes.string,
  color: PropTypes.string,
  as: PropTypes.string,
  fontWeight: PropTypes.number || PropTypes.string,
  marginRight: PropTypes.number || PropTypes.string,
};

export default memo(Comment);
