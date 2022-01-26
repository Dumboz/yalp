import db from 'db/filter.json';
import QueryString from 'qs';
import { ButtonGroup } from './PriceFilterButton.styled';
import { PriceFilterButton } from './PriceFilterButton';
import { useState, useLayoutEffect, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { setPrice } from 'store/filterSlice';

export function PriceFilterButtonGroup() {
  const { price: priceState } = useSelector((state) => state.filter);
  const { search } = useLocation();
  const dispatch = useDispatch();
  const query = QueryString.parse(search.replace(/^\?/, ''));

  useLayoutEffect(() => {
    const { price } = query;

    price && price.split(',').map((price) => dispatch(setPrice(price - 1)));
  }, []);

  const handleClick = (e) => {
    const payload = db.price[e.target.textContent];
    console.log(payload);
    dispatch(setPrice(payload - 1));
  };

  return (
    <ButtonGroup>
      {Object.keys(db.price).map((state, key) => (
        <PriceFilterButton
          key={key}
          onClick={handleClick}
          isSelect={priceState[key]}
          aria-checked={priceState[key]}>
          {state}
        </PriceFilterButton>
      ))}
    </ButtonGroup>
  );
}
