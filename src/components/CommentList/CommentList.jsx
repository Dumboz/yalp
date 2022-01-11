import styled from 'styled-components';
import { getSize, setMargin } from 'utils';

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
  margin-left: ${setMargin(0.5)}px;
  margin-right: ${setMargin(0.5)}px;
  line-height: '1.4';
`;

export function CommentList({ children }) {
  return (
    <InlineList>
      {children.map((e, i) => (
        <>
          {i > 0 && (
            <CommaLi size={e.props.size} aria-hidden>
              •
            </CommaLi>
          )}
          <li key={e.props.title}>{e}</li>
        </>
      ))}
    </InlineList>
  );
}
