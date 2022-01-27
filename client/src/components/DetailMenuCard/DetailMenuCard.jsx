import PropTypes from 'prop-types';
import { Wrap, Image, Price, Title, Preview } from './DetailMenuCard.styled';

export function DetailMenuCard({
  src,
  alt,
  price,
  title,
  photoNum,
  reviewNum,
  size,
}) {
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
