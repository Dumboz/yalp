import { useState } from 'react';
import { Selection } from 'components';
import { Wrapper, Heading, List, Button } from './FilterList.styled';

export const FilterList = ({ heading, options }) => {
  const [isChecked, setChecked] = useState([]);
  const isOver = options.length > 4;
  isOver && options.splice(4);

  const handleClick = (e) => {
    const selectionButton = e.target.children[1];
    selectionButton.classList.toggle('active');

    console.log(e.target);
  };

  return (
    <Wrapper>
      <Heading>{heading}</Heading>
      <List>
        {options.map((item, key) => (
          <li key={key} tabIndex={'0'}>
            <Selection
              type="checkbox"
              onClick={handleClick}
              group={heading}
              checked={isChecked[key]}>
              {item}
            </Selection>
          </li>
        ))}
      </List>
      {isOver && <Button>See all</Button>}
    </Wrapper>
  );
};
