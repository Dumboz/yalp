import { memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export const CarouselContainer = memo(styled.div`
  width: 100%;
  height: 425px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`);

export const Img = memo(styled.img`
  object-fit: cover;
  filter: brightness(70%);
`);

export const ImgContainer = memo(styled(Link)`
  display: block;
  width: auto;
  height: 425px;
`);
