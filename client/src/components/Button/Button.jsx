import React from 'react';
import PropTypes from 'prop-types';
import { buttonStyle, ButtonItem } from './Button.styeld';
import { Comment } from '../Comment/Comment';
import { Icon } from '../Icon/Icon';

function Button({
  buttonType,
  flatBorderSide,
  as,
  href,
  iconType,
  size,
  children,
}) {
  const contents = children ? (iconType ? 'textIcon' : 'text') : 'icon';

  return (
    <ButtonItem
      as={as}
      href={href}
      contents={contents}
      buttonType={buttonType}
      flatBorderSide={flatBorderSide}
    >
      {contents === 'icon' ? (
        <Icon
          type={iconType}
          size={size}
          color={buttonStyle[buttonType].color}
        />
      ) : (
        <Comment
          iconType={iconType}
          size={size}
          color={buttonStyle[buttonType].color}
        >
          {children}
        </Comment>
      )}
    </ButtonItem>
  );
}

Button.defaultProps = {
  buttonType: 'default',
  flatBorderSide: 'none',
  as: 'button',
  size: 16,
};

Button.propTypes = {
  buttonType: PropTypes.oneOf(['default', 'outline', 'highlight']),
  href: PropTypes.string,
  as: PropTypes.oneOf(['button', 'a']),
  flatBorderSide: PropTypes.oneOf(['none', 'top', 'left', 'right', 'bottom']),
  children: PropTypes.any,
};

export default React.memo(Button);
