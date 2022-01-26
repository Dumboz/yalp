import { Comment } from 'components/Comment/Comment';
import { CommentList } from 'components/CommentList/CommentList';
import Rating from 'components/Rating/Rating';
import PhotoModal from 'layouts/PhotoModal/PhotoModal';
import React, { useState } from 'react';
import styled from 'styled-components';
import { getHexaColor } from 'styles/color';
import { makeTimeString } from 'utils';
import CarouselWarpper from './Carousel';
import {
  DetailContainer,
  DetailWrapper,
  Title,
  OpenTimeWrapper,
  RatingWrapper,
} from './DetailBanner.styled';

const DetailBannerWrapper = styled.div`
  min-width: 1100px;
`;

function DetailBanner({ restaurantDetail }) {
  const {
    name,
    rating,
    review_count,
    price,
    is_closed,
    is_claimed,
    categories,
    hours,
    photos,
  } = restaurantDetail;

  const now = new Date();
  const today = now.getDay() - 1 === -1 ? 0 : now.getDay() - 1;

  const [visible, setVisible] = useState(false);
  const [select, setSelect] = useState();

  return (
    <DetailBannerWrapper>
      {visible && (
        <PhotoModal
          visible={visible}
          setVisible={setVisible}
          title={name}
          photos={[...photos, ...photos, ...photos]}
          select={select}
        />
      )}
      <DetailContainer>
        <CarouselWarpper
          setVisible={setVisible}
          setSelect={setSelect}
          photos={[...photos, ...photos, ...photos]}
        />

        <DetailWrapper>
          <Title>{name}</Title>
          <RatingWrapper>
            <Rating
              score={rating}
              width={33}
              color={'white'}
            >{`${review_count} ${
              review_count > 1 ? 'reviews' : 'review'
            }`}</Rating>
          </RatingWrapper>

          <CommentList color="white">
            {is_claimed ? (
              <Comment
                color={getHexaColor('blue', 700)}
                iconType="claimed"
                fontWeight={900}
              >
                Claimed
              </Comment>
            ) : (
              <Comment color={getHexaColor('primary', 500)} fontWeight={900}>
                Not Claimed
              </Comment>
            )}
            <Comment color={'white'} fontWeight={900}>
              {price}
            </Comment>
            <Comment color={'white'} fontWeight={900}>
              {categories[0].title}
            </Comment>
          </CommentList>

          <OpenTimeWrapper>
            {is_closed ? (
              <Comment
                color={getHexaColor('primary', 500)}
                fontWeight={900}
                marginRight={8}
              >
                Closed
              </Comment>
            ) : (
              <Comment
                color={getHexaColor('blue', 700)}
                fontWeight={900}
                marginRight={8}
              >
                Opened
              </Comment>
            )}
            <Comment color="white" fontWeight={900}>
              {`${makeTimeString(
                hours[0].open[today].start,
              )} - ${makeTimeString(hours[0].open[today].end)}`}
            </Comment>
          </OpenTimeWrapper>
        </DetailWrapper>
      </DetailContainer>
    </DetailBannerWrapper>
  );
}

export default React.memo(DetailBanner);
