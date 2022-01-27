import styled from 'styled-components';

export const Wrap = styled.div`
  border: 1px solid black;
  box-sizing: border-box;
  width: 200px;
  height: 250px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  line-height: 0;
  margin: 0;
  padding: 0;
  padding-top: 5px;
`;

export const Image = styled.img`
  display: block;
  width: 180px;
  height: 180px;
  border-radius: 7px;
  background-color: black;
  position: relative;
`;

export const Price = styled.p`
  font-size: 14px;
  color: white;
  position: absolute;
  z-index: 1;
  top: 25%;
  left: 5%;
`;

export const Title = styled.h1`
  font-size: 18px;
  font-weight: 600;
  display: flex;
  text-align: center;
  align-items: center;
`;
export const Preview = styled.h2`
  font-size: 14px;
  font-weight: 400;
`;
