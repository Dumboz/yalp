import PropTypes from 'prop-types';
import { useState, useCallback, useEffect } from 'react';
import { Input, Label as StyledLabel, List, Span } from './Selection.styled';
import { A11yHidden } from 'components';

export function Selection({
  keyProp,
  type,
  group,
  children,
  checked,
  fontSize = 16,
  boxSize = 22,
  onClick,
  content,
}) {
  const id = group + ' ' + keyProp;

  const handleCheck = (e) => {
    const isChecked = e.target.firstElementChild.checked;
    e.target.firstElementChild.checked = isChecked ? false : true;

    const label = e.target.children[1];
    label.classList.toggle('active');
  };

  return (
    <List
      onClick={(e) => {
        handleCheck(e);
        onClick && onClick(e);
      }}
      aria-label={content}>
      <Input id={id} type={type} name={group} aria-checked={checked} />
      <StyledLabel
        type={type}
        htmlFor={id}
        checked={checked}
        boxSize={boxSize}
        aria-labelledby={'contents'}
        // className={checked ? 'active' : 'deactive'}
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
