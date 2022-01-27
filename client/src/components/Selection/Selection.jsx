import db from 'db/filter.json';
import QueryString from 'qs';
import PropTypes from 'prop-types';
import { useEffect, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { setFeatures, setDistance } from 'store/filterSlice';
import { Input, Label as StyledLabel, List, Span } from './Selection.styled';

export function Selection({
  keyProp,
  type,
  group,
  children,
  checked,
  onClick,
  fontSize = 16,
  boxSize = 22,
}) {
  const id = group + '-' + keyProp;
  const filterState = useSelector((state) => state.filter);

  const { search } = useLocation();
  const query = QueryString.parse(search.replace(/^\?/, ''));
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    const { attributes, radius } = query;
    const option = db[group][children];

    if (!attributes) dispatch(setFeatures('initial'));

    attributes &&
      group === 'features' &&
      attributes.includes(option) &&
      dispatch(setFeatures(option));

    radius &&
      group === 'distance' &&
      radius.includes(option) &&
      dispatch(setDistance(option));
  }, []);

  useEffect(() => {
    const inputElement = document.getElementById(`${id}`);
    const labelElement = document.querySelector(`#${id} + label`);
    const option = db[group][children];

    inputElement.checked = filterState[group][option];
    labelElement.classList.toggle('active', inputElement.checked);
  });

  const handleCheck = (e) => {
    const inputElement = e.target.querySelector('input');
    const labelElement = e.target.querySelector('label');

    inputElement.checked = inputElement.checked ? false : true;
    labelElement.classList.toggle('active');
  };

  return (
    <List
      onClick={(e) => {
        handleCheck(e);
        onClick && onClick(e);
      }}
      aria-label={children}
    >
      <Input id={id} type={type} name={group} aria-checked={checked} />
      <StyledLabel
        type={type}
        htmlFor={id}
        checked={checked}
        boxSize={boxSize}
        aria-labelledby={'contents'}
      />
      <Span id="contents" tabIndex="-1" fontSize={fontSize}>
        {children}
      </Span>
    </List>
  );
}

Selection.propTypes = {
  type: PropTypes.string.isRequired,
  group: PropTypes.string.isRequired,
  children: PropTypes.string,
  checked: PropTypes.bool,
};
