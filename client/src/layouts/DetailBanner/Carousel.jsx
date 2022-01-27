import React, { useCallback } from 'react';
import styled from 'styled-components';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

const CarouselContainer = styled.div`
  width: 100%;
  height: 425px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

const Img = styled.img`
  object-fit: cover;
  filter: brightness(70%);
`;

const ImgContainer = styled(Link)`
  display: block;
  width: auto;
  height: 100%;
  max-height: 425px;
`;

function CarouselWarpper({ setVisible, setSelect, name, photos }) {
  const onClick = useCallback(
    (e, id) => {
      setVisible(true);
      setSelect(id);
    },
    [setSelect, setVisible]
  );

  return (
    <CarouselContainer>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        dynamicHeight={true}
        centerMode={true}
        centerSlidePercentage={30}
        useKeyboardArrows={true}
        selectedItem={1}
        showThumbs={false}
        showIndicators={false}
        stopOnHover={true}
        autoFocus={true}
      >
        {photos.map((photo, id) => (
          <ImgContainer to={'#'} key={id} onClick={(e) => onClick(e, id)}>
            <Img src={photo} alt={`${name}${id}`} height={425} />
          </ImgContainer>
        ))}
      </Carousel>
    </CarouselContainer>
  );
}

export default React.memo(CarouselWarpper);
