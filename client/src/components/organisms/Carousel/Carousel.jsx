import { memo, useCallback } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { CarouselContainer, Img, ImgContainer } from './Carousel.styled';

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

export default memo(CarouselWarpper);
