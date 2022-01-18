import PropTypes from 'prop-types';
import { useState, useCallback, useEffect } from 'react';
import { Input, Label as StyledLabel, List, Span } from './Selection.styled';

export function Selection({
  keyProp,
  type,
  group,
  children,
  checked,
  fontSize,
  boxSize,
  onClick,
  content,
}) {
  const id = group + ' ' + keyProp;

  return (
    <List onClick={onClick} aria-label={content}>
      <Input
        id={id}
        readOnly
        type={type}
        name={group}
        checked={checked}
        aria-checked={checked}
      />
      <StyledLabel
        type={type}
        htmlFor={id}
        checked={checked}
        boxSize={boxSize}
        aria-labelledby={'contents'}
        className={checked ? 'active' : 'deactive'}
      />
      <Span id="contents" tabIndex="-1" fontSize={fontSize}>
        {children}
      </Span>
    </List>
  );
}

Selection.propTypes = {
  type: PropTypes.string.isRequired,
  group: PropTypes.string.isRequired,
  children: PropTypes.string,
  checked: PropTypes.bool,
};
