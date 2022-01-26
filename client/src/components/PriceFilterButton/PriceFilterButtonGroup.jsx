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

  const [inexpensive, setInexpensive] = useState(false);
  const [moderate, setModerate] = useState(false);
  const [pricey, setPricey] = useState(false);
  const [expensive, setExpensive] = useState(false);

  const toggleInexpensive = () => setInexpensive(!inexpensive);
  const toggleModerate = () => setModerate(!moderate);
  const togglePricey = () => setPricey(!pricey);
  const toggleExpensive = () => setExpensive(!expensive);

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
      {/* <PriceFilterButton
        onClick={toggleInexpensive}
        isSelect={inexpensive}
        aria-checked={inexpensive}>
        $
      </PriceFilterButton>
      <PriceFilterButton
        onClick={toggleModerate}
        isSelect={moderate}
        aria-checked={moderate}>
        $$
      </PriceFilterButton>
      <PriceFilterButton
        onClick={togglePricey}
        isSelect={pricey}
        aria-checked={pricey}>
        $$$
      </PriceFilterButton>
      <PriceFilterButton
        onClick={toggleExpensive}
        isSelect={expensive}
        aria-checked={expensive}>
        $$$$
      </PriceFilterButton> */}
    </ButtonGroup>
  );
}
