import { A11yHidden } from 'components/A11yHidden/A11yHidden';
import { Icon } from 'components/Icon/Icon';
import { string } from 'prop-types';
import { Description } from './Comment.styled';
import { Skeleton } from 'components/Skeleton/Skeleton.styled';

const cutText = (text, limit) => text.trim().slice(0, limit) + '...';

export function Comment({ iconType, title, limit, size, children, color, as }) {
  const CustomComment = iconType || title ? 'p' : 'span';

  return (
    <Description as={as} size={size} color={color}>
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
};

Comment.propTypes = {
  title: string,
  children: string.isRequired,
};
