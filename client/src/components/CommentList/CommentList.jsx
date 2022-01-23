import { InlineList, CommaLi } from './CommentList.styled';

export function CommentList({ size, children, itemAs }) {
  const comments = Array.isArray(children) ? children : [children];

  const itemList = Array.from({ length: comments.length * 2 - 1 }, (_, i) => (
    <CommaLi key={'comma' + i}>•</CommaLi>
  )).map((e, i) => (i % 2 !== 0 ? e : comments[i / 2]));

  return (
    <InlineList>
      {itemList.map(({ type: Item, props, key }) => (
        <Item key={key} as={itemAs} size={size} {...props} />
      ))}
    </InlineList>
  );
}
CommentList.defaultProps = {
  itemAs: 'li',
  size: 16,
};
