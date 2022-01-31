import { memo, useRef } from 'react';
import { array } from 'prop-types';
import {
  Rating,
  Comment,
  CommentList,
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
import { highlightMarker, restoreMarker } from './handler';
import { useRestaurantForObserve } from 'hooks/useRestaurantForObserve';

function RestaurantCard({
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
  const ref = useRef();
  const { review, operationState } = useRestaurantForObserve(ref, id);

  return (
    <li ref={ref}>
      <CardLink
        to={'/restaurant/' + id}
        onMouseEnter={highlightMarker(GEOArr[index])}
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
              {
                <CommentList size={fontSize}>
                  {[price].map((feature) => (
                    <Comment key={feature}>{feature}</Comment>
                  ))}
                </CommentList>
              }
            </TagsWrapper>
            <Operation size={fontSize} {...operationState} />
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
  serviceList: array /* <Service></Service> */,
};

export default memo(RestaurantCard);
