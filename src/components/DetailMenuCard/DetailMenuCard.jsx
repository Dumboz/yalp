import styled, { css } from 'styled-components';

export function DetailMenuCard({ src, alt, price, title, photo, review }) {
  return (
    <>
      <div>
        <img src={src} alt={alt} />
        '$'+{price}
        <h1>{title}</h1>
        <h2>
          `${photo} Photos . ${review} Reviews`
        </h2>
      </div>
    </>
  );
}
