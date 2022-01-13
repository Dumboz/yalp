import { Input, Label as StyledLabel, List } from './Selection.styled';

export function Selection({ key, type, name, children, checked }) {
  const id = name + key;
  return (
    <List key={key}>
      <Input
        type={type}
        name={name}
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
      />
      <span id="contents" tabIndex="0">
        {children}
      </span>
    </List>
  );
}
