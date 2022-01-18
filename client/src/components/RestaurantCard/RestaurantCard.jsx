import Rating from 'components/Rating/Rating';
import { Comment } from 'components/Comment/Comment';
import { CardLink, Figure } from './RestaurantCard.styled';

export function RestaurantCard({
  href,
  imgUrl,
  name,
  rating,
  reviewCount,
  food,
  location,
  phone,
}) {
  return (
    <CardLink href={href} role="button">
      <Figure>
        <img src={imgUrl} alt={name} />
        <figcaption>
          <h3>{name}</h3>
          <Rating score={rating} width={18}>
            {reviewCount} reviews
          </Rating>
          <span>{food}</span>
          <span>{location}</span>
          <Comment iconType="phone" title="call" size={14}>
            {phone}
          </Comment>
        </figcaption>
      </Figure>
    </CardLink>
  );
}
