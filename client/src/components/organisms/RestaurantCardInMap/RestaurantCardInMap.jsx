import {
  Categories,
  Container,
  Img,
  Title,
} from './RestaurantCardInMap.styled';
import { Rating } from 'components';
import { memo } from 'react';

function RestaurantCardInMap({
  image_url,
  name,
  review_count,
  categories,
  rating,
}) {
  return (
    <Container>
      <Img src={image_url} alt={name} />
      <Title>{name}</Title>
      <Rating width={20} score={rating}>
        {review_count}
      </Rating>
      <Categories>
        {categories.map(({ title }, i) => (
          <li>
            {i > 0 && ', '}
            {title}
          </li>
        ))}
      </Categories>
    </Container>
  );
}

export default memo(RestaurantCardInMap);
