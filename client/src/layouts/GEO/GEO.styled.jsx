import styled from 'styled-components';

export const Map = styled.div`
  position: relative;
  top: 0;
  width: 100%;
  height: 100%;
`;

export const MapWrapper = styled.div`
  height: calc(100vh - 130px);
  width: 30%;
  position: fixed;
  top: 130px;
  left: 70%;
  right: 0;

  @media screen and (max-width: 1400px) {
    & {
      min-width: 30%;
      width: calc(100% - 950px);
      left: 950px;
    }
  }
`;
