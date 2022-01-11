import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

export function DetailMenuCard({ src, alt, price, title, photo, review }) {
  return (
    <>
      <div>
        <img src={src} alt={alt} />
        <p>{'$' + price}</p>
        <h1>{title}</h1>
        <h2>{photo + ' Photos . ' + review + ' Review'}</h2>
      </div>
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
};

DetailMenuCard.defaultProps = {
  src: '/#',
  alt: 'image description',
  id: 0,
  price: '$' + 0,
  title: 'Restaurant name',
  photoNum: 0,
  reviewNum: 0,
};
