import axios from 'axios';
import { useEffect } from 'react';
import { Button } from './FilterButton.styled';
import { Spinner, Icon } from 'components';

const FONT_RATIO = 0.6;

export const FilterButton = ({ children, height = 22 }) => {
  const fontSize = height * FONT_RATIO;
  const handleClick = (e) => {
    const spinnerElement = document.getElementsByClassName('spinner')[0];

    spinnerElement.classList.add('active');
    setTimeout(() => {
      spinnerElement.classList.remove('active');
    }, 2000);
  };

  return (
    <Button onClick={handleClick} height={height} fontSize={fontSize}>
      {children}
      <Icon type="dropdown" size={fontSize * 0.8} />
      <Spinner className={'spinner'} height={height - 10} />
    </Button>
  );
};

FilterButton.DropDown = function FilterDropDown({ children, height }) {
  return (
    <div className="wrapper" height={height}>
      <Button height>
        {children}
        <Spinner className="spinner" height={height - 10} />
      </Button>
    </div>
  );
};
