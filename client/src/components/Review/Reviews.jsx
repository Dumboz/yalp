import { ReviewWrapper } from './Reviews.styled';
import { ReviewCard } from 'components/ReviewCard/ReviewCard';

export const Reviews = (reviewList) => {
  const reviews = reviewList.reviewList;

  return (
    <>
      {reviews.map((review, key) => (
        <ReviewWrapper key={key}>
          <ReviewCard review={review}></ReviewCard>
        </ReviewWrapper>
      ))}
    </>
  );
};
