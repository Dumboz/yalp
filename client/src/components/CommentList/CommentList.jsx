import { InlineList, CommaLi } from './CommentList.styled';

export function CommentList({ size, children, itemAs }) {
  const comments = Array.isArray(children) ? children : [children];

  const itemList = new Array(comments.length * 2 - 1)
    .fill('•')
    .map((e, i) => (i % 2 !== 0 ? e : comments[i / 2]));

  return (
    <InlineList>
      {itemList.map((e, i) => {
        if (e.type) {
          const { type: Item } = e;
          return (
            <Item as={itemAs} key={e.props.title} size={size} {...e.props} />
          );
        }
        return (
          <CommaLi size={size} aria-hidden key={e + i}>
            {e}
          </CommaLi>
        );
      })}
    </InlineList>
  );
}
CommentList.defaultProps = {
  itemAs: 'li',
  size: 16,
};
