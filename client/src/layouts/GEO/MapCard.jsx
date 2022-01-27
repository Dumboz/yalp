import { MapCategories, MapCardContainer } from './GEO.styled';
import Rating from 'components/Rating/Rating';

export function MapCard({ image_url, name, review_count, categories, rating }) {
  return (
    <MapCardContainer>
      <img
        src={image_url}
        alt={name}
        style={{
          objectFit: 'cover',
          height: '140px',
        }}
      />
      <h3
        style={{
          fontWeight: 'bold',
          fontSize: '18px',
          paddingTop: '0.5em',
          paddingBottom: '0.5em',
        }}
      >
        {name}
      </h3>
      <Rating width={20} score={rating}>
        {review_count}
      </Rating>
      <MapCategories>
        {categories.map(({ title }, i) => (
          <li>
            {i > 0 && ', '}
            {title}
          </li>
        ))}
      </MapCategories>
    </MapCardContainer>
  );
}
