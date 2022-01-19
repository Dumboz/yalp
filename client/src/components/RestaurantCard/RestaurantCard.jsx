import Rating from 'components/Rating/Rating';
import { array } from 'prop-types';
import {
  Comment,
  CommentList as FeatureList,
  CategoriesList,
  Operation,
  Service,
  ServiceList,
} from 'components';
import {
  CardLink,
  Figure,
  TagsWrapper,
  ImgContainer,
  Img,
} from './RestaurantCard.styled';

export function RestaurantCard({
  href,
  imgUrl,
  name,
  rating,
  reviewCount,
  fontSize,
  categories,
  filterList,
  review,
  serviceList,
}) {
  return (
    <CardLink href={href} role="button">
      <Figure>
        <ImgContainer>
          <Img src={imgUrl} alt={name} />
        </ImgContainer>
        <figcaption>
          <h3>{name}</h3>
          <Rating score={rating} width={18}>
            {reviewCount}
          </Rating>
          <TagsWrapper>
            <CategoriesList size={fontSize}>{categories}</CategoriesList>
            <FeatureList size={fontSize}>{filterList}</FeatureList>
          </TagsWrapper>
          <Operation size={fontSize} />
          <Comment iconType="talk" title="most recently review" size={fontSize}>
            {review}
          </Comment>
          <ServiceList size={fontSize}>{serviceList}</ServiceList>
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
  filterList: array /* <Comment></Comment> */,
  serviceList: array /* <Service></Service> */,
};
