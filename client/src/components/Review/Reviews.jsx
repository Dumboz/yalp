import { ReviewWrapper } from './Reviews.styled';
import { ReviewCard } from 'components/ReviewCard/ReviewCard';
import { SortButton } from 'components/SortButton/SortButton';
import { getHexaColor } from 'styles/color';
import { useCallback, useEffect, useState } from 'react';

import { useGetRestaurantQuery } from 'services/businesses';
import { useLocation } from 'react-router-dom';

export const Reviews = () => {
  const { pathname: id } = useLocation();
  const { data, error, isLoading } = useGetRestaurantQuery(id);
  const [copyOfReviews, setCopyOfReviews] = useState([
    ...data.restaurantReview.reviews,
  ]);

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
    const sortButtonSpan = document.querySelector('.sortbutton > span');

    switch (option) {
      case 'Newest First':
        setCopyOfReviews(
          [...copyOfReviews].sort((a, b) =>
            new Date(a.time_created) > new Date(b.time_created)
              ? -1
              : new Date(a.time_created) < new Date(b.time_created)
              ? 1
              : 0
          )
        );
        sortButtonSpan.textContent = option;
        break;
      case 'Oldest First':
        setCopyOfReviews(
          [...copyOfReviews].sort((a, b) =>
            new Date(a.time_created) > new Date(b.time_created)
              ? 1
              : new Date(a.time_created) < new Date(b.time_created)
              ? -1
              : 0
          )
        );
        sortButtonSpan.textContent = option;
        break;
      case 'Highest Rated':
        setCopyOfReviews(
          [...copyOfReviews].sort((a, b) =>
            a.rating > b.rating ? -1 : a.rating < b.rating ? 1 : 0
          )
        );
        sortButtonSpan.textContent = option;
        break;
      case 'Lowest Rated':
        setCopyOfReviews(
          [...copyOfReviews].sort((a, b) =>
            a.rating > b.rating ? 1 : a.rating < b.rating ? -1 : 0
          )
        );
        sortButtonSpan.textContent = option;
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
      {!isLoading &&
        copyOfReviews.map((review) => (
          <ReviewWrapper key={review.id}>
            <ReviewCard review={review}></ReviewCard>
          </ReviewWrapper>
        ))}
      {/* {JSON.stringify(copyOfReviews.map((review) => review.time_created))} */}
    </>
  );
};
