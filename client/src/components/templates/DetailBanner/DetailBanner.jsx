import { Rating, Comment, CommentList, PhotoModal, Carousel } from 'components';
import { memo, useState } from 'react';
import { getHexaColor } from 'styles/color';
import { makeTimeString } from 'utils';
import {
  DetailContainer,
  DetailWrapper,
  Title,
  OpenTimeWrapper,
  RatingWrapper,
  DetailBannerWrapper,
} from './DetailBanner.styled';
import { useLocation } from 'react-router-dom';
import { useGetRestaurantQuery } from 'services/businesses';

function DetailBanner() {
  const { pathname } = useLocation();
  const { data, isLoading } = useGetRestaurantQuery(pathname);
  const [visible, setVisible] = useState(false);
  const [select, setSelect] = useState();

  if (isLoading) return <></>;

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
  } = data.restaurantDetail;

  const now = new Date();
  const today = now.getDay() - 1 === -1 ? 0 : now.getDay() - 1;

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
        <Carousel
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
                hours[0].open[today].start
              )} - ${makeTimeString(hours[0].open[today].end)}`}
            </Comment>
          </OpenTimeWrapper>
        </DetailWrapper>
      </DetailContainer>
    </DetailBannerWrapper>
  );
}

export default memo(DetailBanner);
