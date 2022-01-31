import { useState, useEffect } from 'react';
import axios from 'axios';

const today = new Date().getDay();
const initialOpen = { day: today, start: '0000', end: '0000' };
const observerOptions = {
  root: null,
  rootMargin: '0px 0px 700px',
  threshlod: 0,
};

export const useRestaurantForObserve = (ref, id) => {
  const [review, setReview] = useState('');
  const [operationState, setOperationState] = useState({
    isOpenNow: null,
    start: null,
    end: null,
  });
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        axios(`http://localhost:4001/api/businesses/${id}`).then(
          ({ data: { restaurantDetail, restaurantReview } }) => {
            let { hours } = restaurantDetail;
            const { reviews } = restaurantReview;

            hours = hours || [{ is_open_now: null, open: [initialOpen] }];

            const { is_open_now: isOpenNow, open } = hours[0];

            if (!open.find(({ day }) => day === today)) open.push(initialOpen);
            const { start, end } = open?.find(({ day }) => day === today);

            setReview(reviews[0].text);
            setOperationState({ isOpenNow, start, end });
          }
        );
        observer.unobserve(ref.current);
      });
    }, observerOptions);

    observer.observe(ref.current);
  }, []);

  return { review, operationState };
};
