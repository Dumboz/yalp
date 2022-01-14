import { TagState } from './Tags.styled';

export function Tags({ fontSize, children }) {
  console.log(fontSize);
  return <TagState size={fontSize}>{children}</TagState>;
}

Tags.defaultTypes = {
  fontSize: 24,
  children: 'Japanese',
};
