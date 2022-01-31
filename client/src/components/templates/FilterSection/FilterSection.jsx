import db from 'db/filter.json';
import { List, ListItem } from './FilterSection.styled';
import { FilterList } from 'components';
import { memo } from 'react';

function FilterSection() {
  const getOptions = (type) => {
    const data = JSON.parse(JSON.stringify(db));
    return Object.entries(data[type]);
  };

  return (
    <List>
      <ListItem>
        <FilterList categories="price" heading="filters" type="price" />
      </ListItem>
      <ListItem>
        <FilterList
          categories="features"
          heading="features"
          type="checkbox"
          options={getOptions('features')}
        />
      </ListItem>
      <ListItem>
        <FilterList
          categories="distance"
          heading="distance"
          type="radio"
          options={getOptions('distance')}
        />
      </ListItem>
    </List>
  );
}

export default memo(FilterSection);
