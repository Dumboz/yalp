import { string, arrayOf } from 'prop-types';
import { useRef } from 'react';
import { Selection } from 'components';
import { Wrapper, Heading, List, Button } from './FilterList.styled';

export const FilterList = ({ type = 'checkbox', heading, options }) => {
  const listRef = useRef(null);
  const isOver = options.length > 4;
  isOver && options.splice(4);

  const handleClick = (e) => {
    const type = e.target.querySelector('input').type;

    if (type === 'radio') {
      [...listRef.current.children].forEach((item) => {
        const input = item.querySelector('input');
        const label = item.querySelector('label');
        label.classList.toggle('active', input.checked);
      });
    }
  };

  return (
    <Wrapper>
      <Heading>{heading}</Heading>
      <List ref={listRef}>
        {options.map((item, key) => (
          <li key={key} tabIndex={'0'}>
            <Selection type={type} onClick={handleClick} group={heading}>
              {item}
            </Selection>
          </li>
        ))}
      </List>
      {isOver && <Button>See all</Button>}
    </Wrapper>
  );
};

FilterList.propTypes = {
  type: string,
  heading: string.isRequired,
  options: arrayOf(string),
};
