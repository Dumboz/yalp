import styled, { createGlobalStyle } from 'styled-components';
import PropTypes from 'prop-types';
import { size } from 'lodash';

const Wrap = styled.div`
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
  padding-top: 3px;
`;

const Image = styled.img`
  display: block;
  width: 180px;
  height: 180px;
  border-radius: 7px;
  background-color: black;
  position: relative;
  padding-bottom: 5px;
`;

const Price = styled.p`
  font-size: 14px;
  color: white;
  position: absolute;
  z-index: 1;
  top: 25%;
  left: 5%;
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 600;
  display: flex;
  text-align: center;
  align-items: center;
`;
const Preview = styled.h2`
  font-size: 14px;
  font-weight: 400;
`;

export function DetailMenuCard({ src, alt, price, title, photoNum, reviewNum, sizze }) {
  return (
    <>
      <Wrap>
        <Image backgroundImage={src} alt={alt}></Image>
        <Price>{'$' + price}</Price>
        <Title style={{ fontSize: size }}>{title}</Title>
        <Preview style={{ fontSize: size }}>
          {photoNum + ' Photos . ' + reviewNum + ' Review'}
        </Preview>
      </Wrap>
    </>
  );
}

DetailMenuCard.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  photoNum: PropTypes.number,
  reviewNum: PropTypes.number,
  size: PropTypes.number,
};

DetailMenuCard.defaultProps = {
  src: '/#',
  alt: 'image description',
  id: 0,
  price: 0,
  title: 'Restaurant name',
  photoNum: 0,
  reviewNum: 0,
  size: 16,
};
