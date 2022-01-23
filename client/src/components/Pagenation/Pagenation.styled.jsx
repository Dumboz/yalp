import styled from 'styled-components';
import { getHexaColor } from 'styles/color';

export const Ul = styled.ul`
  display: flex;
`;

export const Li = styled.li`
  font-weight: ${({ isCurrent }) => (isCurrent ? 900 : 400)};
  padding: 0 6px;
`;

export const PagelistWrapper = styled.div`
  display: flex;
`;

export const PagenationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin-top: 200px; */
  width: 100%;
  padding: 20px 0;
  border-top: 1px solid ${getHexaColor('gray', 100)};
  border-bottom: 1px solid ${getHexaColor('gray', 100)};
`;

export const Text = styled.span`
  color: ${getHexaColor('gray', 300)};
`;
