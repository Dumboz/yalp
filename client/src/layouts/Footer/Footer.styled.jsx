import styled from 'styled-components';
import { getHexaColor } from 'styles/color';
export const FooterContainer = styled.div`
  background-color: ${getHexaColor('gray', 100)};
`;

export const FooterWrapper = styled.div`
  margin: 0 auto;
  max-width: 80%;
  display: flex;
  flex-wrap: wrap;
  padding-top: 40px;
  padding-bottom: 20px;

  & > div:not(:last-child) {
    width: 280px;
  }
`;

export const ExtraWrapper = styled.div`
  @media screen and (max-width: 1200px) {
    display: flex;
    width: auto;

    & > div {
      width: 280px;
    }
  }
`;

export const FooterListWrapper = styled.div`
  margin-bottom: 40px;
  line-height: 1.8;
  color: ${getHexaColor('gray', 500)};

  & > h4 {
    font-size: 16px;
    font-weight: 700;
    line-height: 2.5;
  }

  & li {
    font-size: 14px;
    font-weight: 300;
  }
`;
