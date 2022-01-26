import { ReviewWrapper } from './Reviews.styled';
import { ReviewCard } from 'components/ReviewCard/ReviewCard';
import { SortButton } from 'components/SortButton/SortButton';
import { getHexaColor } from 'styles/color';
import { useCallback, useEffect, useState } from 'react';

export const Reviews = (reviewList) => {
  const reviews = reviewList.reviewList;
  const [copyOfReviews, setCopyOfReviews] = useState([...reviews]);

  const showModal = useCallback((e) => {
    const modalElement = document.querySelector('.modal-menu');
    const buttonElement = document.querySelector('.sortbutton');
    const iconElement = document.querySelector('.sortbutton use');

    modalElement.classList.toggle('active');
    buttonElement.classList.toggle('pressed');
    iconElement.setAttribute(
      'fill',
      buttonElement.classList.contains('pressed')
        ? getHexaColor('blue', 500)
        : getHexaColor('gray', 500)
    );
  }, []);

  const selectSort = (e) => {
    const option = e.target.textContent;

    switch (option) {
      case 'Newest First':
        console.log('hi');
        setCopyOfReviews(
          copyOfReviews.sort((a, b) =>
            new Date(a.time_created) > new Date(b.time_created)
              ? -1
              : new Date(a.time_created) < new Date(b.time_created)
              ? 1
              : 0
          )
        );
        break;
      case 'Oldest First':
        setCopyOfReviews(
          copyOfReviews.sort((a, b) =>
            new Date(a.time_created) > new Date(b.time_created)
              ? 1
              : new Date(a.time_created) < new Date(b.time_created)
              ? -1
              : 0
          )
        );

        break;
      case 'Highest Rated':
        setCopyOfReviews(
          copyOfReviews.sort((a, b) =>
            a.rating > b.rating ? 1 : a.rating < b.rating ? -1 : 0
          )
        );

        break;
      case 'Lowest Rated':
        setCopyOfReviews(
          copyOfReviews.sort((a, b) =>
            a.rating > b.rating ? -1 : a.rating < b.rating ? 1 : 0
          )
        );

        break;
      default:
        break;
    }

    document.querySelector('.sortbutton').classList.remove('pressed');
    e.target.closest('menu').classList.remove('active');
  };

  return (
    <>
      <SortButton showModal={showModal} selectSort={selectSort} />
      {copyOfReviews.map((review) => (
        <ReviewWrapper key={review.id}>
          <ReviewCard review={review}></ReviewCard>
          {review.id}
        </ReviewWrapper>
      ))}
      {/* {JSON.stringify(copyOfReviews.map((review) => review.time_created))} */}
    </>
  );
};
