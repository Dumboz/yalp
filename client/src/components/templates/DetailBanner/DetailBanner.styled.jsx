import { memo } from 'react';
import styled from 'styled-components';

export const DetailContainer = memo(styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  background-color: black;
  z-index: 0;
  width: 100%;
  height: 425px;
  padding: 40px 64px;
`);

export const DetailWrapper = memo(styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  z-index: 2;
`);

export const Title = memo(styled.h1`
  color: white;
  font-weight: 900;
  font-size: 40px;
`);

export const OpenTimeWrapper = memo(styled.div`
  margin-top: 8px;
  display: flex;
`);

export const RatingWrapper = memo(styled.div`
  margin-bottom: 10px;
`);

export const DetailBannerWrapper = memo(styled.div`
  min-width: 1100px;
`);
