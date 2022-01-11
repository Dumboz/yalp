import { Input, Label as StyledLabel, List } from './Selection.styled';

export function Selection({ key, type, name, children, checked }) {
  const id = name + key;
  return (
    <List key={key}>
      <Input type={type} name={name} id={id} checked={checked}></Input>
      <StyledLabel
        type={type}
        htmlFor={id}
        checked={checked}
        className={checked ? 'active' : 'deactive'}></StyledLabel>
      <span>{children}</span>
    </List>
  );
}
