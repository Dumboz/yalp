import fallback from 'assets/fallbackProfile.png';
import {
  UserWrapper,
  UserImg,
  UserName,
  ReviewText,
} from './ReviewCard.styled';
import Rating from 'components/Rating/Rating';

export const ReviewCard = (review) => {
  console.log(review);
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
            <source srcset={image_url} />
            <img src={fallback} alt={'profile'} />
          </picture>
        </UserImg>
        <UserName>{name}</UserName>
      </UserWrapper>
      <Rating score={rating} children={dateTranslator(time_created)} />
      <ReviewText>{text}</ReviewText>
    </>
  );
};
