import styled from 'styled-components';
import { getSize, setRatioSize } from 'utils';
import { Fragment } from 'react';

const InlineList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;

  & > li {
    display: inline-block;
  }
`;

const CommaLi = styled.li`
  font-size: ${getSize}px;
  margin-left: ${setRatioSize(0.5)}px;
  margin-right: ${setRatioSize(0.5)}px;
  line-height: '1.4';
`;

export function CommentList({ size, children }) {
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
            <li key={e.props.title}>{<Item {...e.props} size={size} />}</li>
          );
        }
        return (
          <CommaLi size={size} aria-hidden key={e + i}>
            {e}
          </CommaLi>
        );
      })}
      {/* {comments.map(({ props, type: Item }, i) => {
        if (!props) throw new Error('Comment 컴포넌트를 사용하세요');

        return (
          <Fragment key={props.title}>
            {i > 0 && (
              <CommaLi size={size} aria-hidden>
                •
              </CommaLi>
            )}
            <li>{<Item {...props} size={size} />}</li>
          </Fragment>
        );
      })} */}
    </InlineList>
  );
}
CommentList.defaultProps = {
  size: 16,
};
