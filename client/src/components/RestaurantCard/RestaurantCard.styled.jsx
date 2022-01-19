import styled from 'styled-components';
import { getHexaColor } from 'styles/color';

export const CardLink = styled.a`
  display: block;
  max-width: 900px;
  transition: 200ms ease-in;
`;
export const Figure = styled.figure`
  border: 1px solid ${getHexaColor('gray', 100)};
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  border-radius: 6px;
  transition: 200ms ease-in-out;

  &:hover {
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);
  }

  & > figcaption {
    width: 70%;
    background-color: white;

    padding: 14px;

    & > h3 {
      font-size: 20px;
      font-weight: 700;
    }

    & > * {
      margin-bottom: 8px;

      &:not(h3) {
        font-size: 14px;
        font-weight: 400;
      }
    }
  }

  & span {
    display: block;
  }
`;

export const TagsWrapper = styled.div`
  display: flex;
  align-items: center;

  & > ul:not(:first-child) {
    margin-left: 8px;
  }
`;

export const ImgContainer = styled.div`
  width: 30%;
  padding: 2.5%;
`;
export const Img = styled.div`
  background-color: red;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  background-image: url(${({ src }) => src});
  background-size: cover;
`;
