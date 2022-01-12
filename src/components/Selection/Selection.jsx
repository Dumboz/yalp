import PropTypes from 'prop-types';
import { Input, Label as StyledLabel, List } from './Selection.styled';

export function Selection({ key, type, group, children, checked, fontSize }) {
  const id = group + key;
  return (
    <List key={key}>
      <Input
        type={type}
        name={group}
        id={id}
        role="switch"
        aria-checked={checked}
        checked={checked}
      />
      <StyledLabel
        type={type}
        htmlFor={id}
        checked={checked}
        className={checked ? 'active' : 'deactive'}
        aria-labelledby={'contents'}
        fontSize={fontSize}
      />
      <span id="contents" tabIndex="0">
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
