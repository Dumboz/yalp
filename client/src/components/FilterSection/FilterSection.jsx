import db from 'db/filter.json';
import { List, ListItem } from './FilterSection.styled';
import { FilterList, PriceFilterButton } from 'components';

export const FilterSection = () => {
  const getOptions = (type) => {
    const data = JSON.parse(JSON.stringify(db));
    return Object.entries(data[type]);
  };

  return (
    <List>
      <ListItem>
        <FilterList heading="filters" type="price" />
      </ListItem>
      <ListItem>
        <FilterList
          heading="features"
          type="checkbox"
          options={getOptions('feature')}
        />
      </ListItem>
      <ListItem>
        <FilterList
          heading="distance"
          type="radio"
          options={getOptions('distance')}
        />
      </ListItem>
    </List>
  );
};
