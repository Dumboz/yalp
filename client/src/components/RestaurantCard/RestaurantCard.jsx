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

// 본 데이터에서 넘어오는 id를 받아 business id를 요청한 후 photos로 변환 (캐러셀 포기)
// size에 대한 처리는 조금 더 고민
// categories는 배열 안 객체의 title로 접근
// featureList에는 일단 price만 넣는걸로...
// review는 id/review
// serviceList는 transactions
// 운영 시간도 id로 가져와야된다

export function RestaurantCard({
  id,
  image_url,
  name,
  rating,
  review_count,
  categories,
  price,
  is_closed,
  review,
  transactions,
  fontSize,
}) {
  const featureList = [];
  price && featureList.push(price);

  return (
    <CardLink to={'/' + id}>
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
          {/* <Operation size={fontSize} /> */}
          {/* <Comment iconType="talk" title="most recently review" size={fontSize}>
            {review}
          </Comment> */}
          {!!transactions.length && (
            <ServiceList size={fontSize}>{transactions}</ServiceList>
          )}
        </figcaption>
      </Figure>
    </CardLink>
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
