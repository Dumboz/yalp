import { A11yHidden } from 'components/A11yHidden/A11yHidden';
import { Icon } from 'components/Icon/Icon';
import { string } from 'prop-types';
import { Description } from './Comment.styled';

const cutText = (text, limit) => text.trim().slice(0, limit) + '...';

export function Comment({ iconType, title, limit, size, children, color }) {
  return (
    <Description size={size} color={color}>
      {iconType && <Icon type={iconType} size={size} color={color} />}
      {title && <A11yHidden as="h3">{title}</A11yHidden>}
      <p>
        {children.length > limit ? `"${cutText(children, limit)}"` : children}
      </p>
    </Description>
  );
}
Comment.defaultProps = {
  limit: 180,
};

Comment.propTypes = {
  title: string.isRequired,
  children: string.isRequired,
};
