import { TagState } from './Tags.styled';

export function Tags({ fontSize, children }) {
  return <TagState size={fontSize}>{children}</TagState>;
}

Tags.defaultTypes = {
  fontSize: 24,
  children: 'Japanese',
};
