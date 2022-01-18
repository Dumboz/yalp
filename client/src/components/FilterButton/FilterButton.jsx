import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button } from './FilterButton.styled';
import { Spinner, Icon } from 'components';

const FONT_RATIO = 0.6;

export const FilterButton = ({ children, height = 22 }) => {
  const fontSize = height * FONT_RATIO;

  const handleClick = (e) => {
    const spinner = document.querySelector('.spinner');
    const button = document.querySelector('.button');
    spinner.classList.add('loading');

    setTimeout(() => {
      spinner.classList.remove('loading');
      button.classList.toggle('selected');
    }, 2000);
  };

  return (
    <Button
      className={'button'}
      onClick={handleClick}
      height={height}
      fontSize={fontSize}>
      {children}
      <Spinner className={'spinner'} height={height - 10} />
    </Button>
  );
};

FilterButton.DropDown = function FilterDropDown({ children, height = 22 }) {
  const fontSize = height * FONT_RATIO;

  const handleClick = (e) => {};

  return (
    <div className="wrapper" height={height}>
      <Button
        className={'button'}
        onClick={handleClick}
        height={height}
        fontSize={fontSize}>
        {children}
        <Icon type="dropdown" size={fontSize * 0.8} />
        <Spinner className="spinner" height={height - 10} />
      </Button>
    </div>
  );
};
