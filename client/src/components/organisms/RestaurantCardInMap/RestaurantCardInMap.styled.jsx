import styled from 'styled-components';

export const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 180px;
  padding-top: 5px;
  padding-left: 5px;
`;

export const Categories = styled.ul`
  font-size: 12px;

  & > li {
    display: inline;
  }
`;

export const Img = styled.img`
  object-fit: cover;
  height: 140px;
`;

export const Title = styled.h3`
  font-weight: bold;
  font-size: 18px;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
`;
