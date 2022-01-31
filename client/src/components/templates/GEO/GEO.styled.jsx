import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Map = styled.div`
  position: relative;
  top: 0;
  width: 100%;
  height: 100%;
`;

export const MapWrapper = styled.div`
  height: calc(100vh - 130px);
  width: 100%;
  position: sticky;
  left: 0;
  top: 130px;
`;
