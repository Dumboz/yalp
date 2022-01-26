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
import { useGetRestaurantQuery } from 'services/businesses';

// 본 데이터에서 넘어오는 id를 받아 business id를 요청한 후 photos로 변환 (캐러셀 포기)
// size에 대한 처리는 조금 더 고민
// categories는 배열 안 객체의 title로 접근
// featureList에는 일단 price만 넣는걸로...
// review는 id/review
// serviceList는 transactions
// 운영 시간도 id로 가져와야된다

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

  // useEffect(() => {
  //   const options = {
  //     root: null,
  //     rootMargin: '0px 0px 700px',
  //     threshlod: 0,
  //   };

  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (!entry.isIntersecting) return;

  //       // fetch(`http://localhost:4001/api/businesses/${id}`)
  //       //   .then((res) => res.json())
  //       //   .then(({ restaurantDetail, restaurantReview }) => {
  //       //     // const { is_open_now, open } = restaurantDetail.hours[0];
  //       //     // const { start, end } = open?.find(({ day }) => day === today);
  //       //     setReview(restaurantReview?.reviews[0].text);
  //       //     console.log({ restaurantDetail, restaurantReview });
  //       //     // setOperationState({
  //       //     //   isOpenNow: is_open_now,
  //       //     //   start,
  //       //     //   end,
  //       //     // });
  //       //     // console.log(restaurantDetail.hours[0]);
  //       //     // console.log(restaurantDetail.hours[0].open);
  //       //     // console.log(restaurantDetail.hours[0].is_open_now);
  //       //   });

  //       // console.log('hi');
  //       observer.unobserve(ref.current);
  //     });
  //   }, options);

  //   // observer.observe(ref.current);
  // }, []);

  const pullUpMarker = (marker) => () => {
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

    console.log(nextZ);
    marker.setZIndex(nextZ);
  };

  const restoreMarker = (marker) => () => {
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
        to={'/' + id}
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
                  {featureList.map((feature) => {
                    return <Comment key={feature}>{feature}</Comment>;
                  })}
                </FeatureList>
              )}
            </TagsWrapper>
            <Operation size={fontSize} />
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
