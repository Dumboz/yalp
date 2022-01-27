import Rating from 'components/Rating/Rating';
import { array } from 'prop-types';
import {
  Comment,
  CommentList as FeatureList,
  CategoriesList,
  Operation,
  ServiceList,
} from 'components';

import {
  CardLink,
  Figure,
  TagsWrapper,
  ImgWrapper,
  Img,
} from './RestaurantCard.styled';
import { getHexaColor } from 'styles/color';

import { useEffect, useRef, useState } from 'react';

export function RestaurantCard({
  index,
  id,
  image_url,
  name,
  rating,
  review_count,
  categories,
  price,
  transactions,
  fontSize,
  GEOArr,
}) {
  const [review, setReview] = useState('');
  const [OperationState, setOperationState] = useState({
    isOpenNow: null,
    start: null,
    end: null,
  });
  const featureList = [];
  price && featureList.push(price);

  const ref = useRef();
  const today = new Date().getDay();

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px 0px 700px',
      threshlod: 0,
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        fetch(`http://localhost:4001/api/businesses/${id}`)
          .then(res => res.json())
          .then(({ restaurantDetail, restaurantReview }) => {
            if (!restaurantDetail.hours) {
              restaurantDetail.hours = [
                {
                  is_open_now: null,
                  open: [{ day: today, start: '0000', end: '0000' }],
                },
              ];
            }
            const { is_open_now, open } = restaurantDetail?.hours[0];
            const { start, end } = open?.find(({ day }) => day === today);

            setReview(restaurantReview?.reviews[0].text);
            setOperationState({
              isOpenNow: is_open_now,
              start,
              end,
            });
          });

        observer.unobserve(ref.current);
      });
    }, options);

    observer.observe(ref.current);
  }, []);

  const pullUpMarker = marker => () => {
    if (!marker) return;

    marker.setIcon({
      ...marker.getIcon(),
      fillColor: getHexaColor('white', 100),
      strokeColor: getHexaColor('primary', 500),
    });

    marker.setLabel({
      ...marker.getLabel(),
      color: getHexaColor('primary', 500),
    });

    const nextZ = marker.increasementZIndex();

    marker.setZIndex(nextZ);
  };

  const restoreMarker = marker => () => {
    if (!marker) return;

    marker.setIcon({
      ...marker.getIcon(),
      fillColor: getHexaColor('primary', 500),
      strokeColor: getHexaColor('white', 100),
    });
    marker.setLabel({
      ...marker.getLabel(),
      color: getHexaColor('white', 100),
    });
  };

  return (
    <li ref={ref}>
      <CardLink
        to={'/restaurant/' + id}
        onMouseEnter={pullUpMarker(GEOArr[index])}
        onMouseLeave={restoreMarker(GEOArr[index])}
      >
        <Figure>
          <ImgWrapper>
            <Img src={image_url} alt={name} />
          </ImgWrapper>
          <figcaption>
            <h3>{name}</h3>
            <Rating score={+rating} width={18}>
              {'' + review_count}
            </Rating>
            <TagsWrapper>
              <CategoriesList size={fontSize}>
                {categories.map(({ title }) => title)}
              </CategoriesList>
              {!!featureList.length && (
                <FeatureList size={fontSize}>
                  {featureList.map(feature => {
                    return <Comment key={feature}>{feature}</Comment>;
                  })}
                </FeatureList>
              )}
            </TagsWrapper>
            <Operation size={fontSize} {...OperationState} />
            <Comment
              iconType="talk"
              title="most recently review"
              size={fontSize}
            >
              {review}
            </Comment>
            {!!transactions.length && (
              <ServiceList size={fontSize}>{transactions}</ServiceList>
            )}
          </figcaption>
        </Figure>
      </CardLink>
    </li>
  );
}
RestaurantCard.defaultProps = {
  fontSize: 14,
};

RestaurantCard.propTypes = {
  categories: array,
  featureList: array /* <Comment></Comment> */,
  serviceList: array /* <Service></Service> */,
};
