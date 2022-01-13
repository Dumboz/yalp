import PropTypes from 'prop-types';
import { useState, useCallback, useEffect } from 'react';
import { Input, Label as StyledLabel, List } from './Selection.styled';

export function Selection({
  keyProp,
  type,
  group,
  children,
  fontSize,
  boxSize,
  onMouseOver,
}) {
  const id = group + keyProp;
  const [check, setCheck] = useState(false);

  const handleChange = (e) => {
    check ? setCheck(false) : setCheck(true);
  };

  return (
    <List onClick={handleChange} onMouseOver={onMouseOver}>
      <Input
        id={id}
        readOnly
        type={type}
        name={group}
        role="switch"
        checked={check}
        aria-checked={check}
      />
      <StyledLabel
        type={type}
        htmlFor={id}
        checked={check}
        boxSize={boxSize}
        aria-labelledby={'contents'}
        className={check ? 'active' : 'deactive'}
      />
      <span id="contents" tabIndex="0" style={{ fontSize }}>
        {children}
      </span>
    </List>
  );
}

Selection.propTypes = {
  type: PropTypes.string.isRequired,
  group: PropTypes.string.isRequired,
  children: PropTypes.string,
  checked: PropTypes.bool,
};
