import { A11yHidden } from 'components/A11yHidden/A11yHidden';
import { Icon } from 'components/Icon/Icon';
import { string } from 'prop-types';
import { Description } from './Comment.styled';
import { Skeleton } from 'components/Skeleton/Skeleton.styled';
import { getHexaColor } from 'styles/color';

const cutText = (text, limit) => text.trim().slice(0, limit) + '...';

export function Comment({
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
  title: string,
  children: string.isRequired,
};
