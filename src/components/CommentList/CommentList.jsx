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
  if (!Array.isArray(children)) {
    throw new Error(
      'CommentList 컴포넌트에는 2개이상의 Comment가 작성되어야 합니다.'
    );
  }

  return (
    <InlineList>
      {children.map(({ props, type: Item }, i) => {
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
      })}
    </InlineList>
  );
}
CommentList.defaultProps = {
  size: 16,
};
