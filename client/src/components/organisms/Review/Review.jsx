import fallback from 'assets/fallbackProfile.png';
import { UserWrapper, UserImg, UserName, ReviewText } from './Review.styled';
import { Rating } from 'components';
import { memo } from 'react';

function Review(review) {
  const { rating, text, time_created, user } = review.review;
  const { name, image_url } = user;

  const dateTranslator = (date) => {
    const dateObj = new Date(date);
    return (
      dateObj.getDate() + '/' + dateObj.getMonth() + '/' + dateObj.getFullYear()
    );
  };

  return (
    <>
      <UserWrapper>
        <UserImg>
          <picture>
            <source srcSet={image_url} />
            <img src={fallback} alt={'profile'} />
          </picture>
        </UserImg>
        <UserName>{name}</UserName>
      </UserWrapper>
      <Rating
        width={20}
        score={rating}
        children={dateTranslator(time_created)}
      />
      <ReviewText>{text}</ReviewText>
    </>
  );
}

export default memo(Review);
