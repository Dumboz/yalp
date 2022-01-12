import { A11yHidden } from 'components/A11yHidden/A11yHidden';
import { Icon } from 'components/Icon/Icon';
import { string } from 'prop-types';
import { Description } from './Comment.styled';

const cutText = (text, limit) => text.trim().slice(0, limit) + '...';

export function Comment({ iconType, title, limit, size, children }) {
  const TextTag = iconType ? 'p' : 'span';

  return (
    <Description size={size}>
      {iconType && <Icon type={iconType} size={size} />}
      {iconType && title && <A11yHidden as="h3">{title}</A11yHidden>}
      <TextTag>
        {children.length > limit ? `"${cutText(children, limit)}"` : children}
      </TextTag>
    </Description>
  );
}
Comment.defaultProps = {
  limit: 180,
};

Comment.propTypes = {
  children: string,
};
