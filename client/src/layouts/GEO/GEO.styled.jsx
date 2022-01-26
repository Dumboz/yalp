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

export const MapCardContainer = styled.div`
  margin: 0;
  padding: 0;
  width: 180px;
  padding-top: 5px;
  padding-left: 5px;
`;

export const MapCategories = styled.ul`
  font-size: 12px;

  & > li {
    display: inline;
  }
`;
