import { A11yHidden } from 'components/A11yHidden/A11yHidden';
import Button from 'components/Button/Button';
import React, { useState, useCallback } from 'react';
import { getAutocomplete } from 'api';
import { Label, Text, Input, Form } from './SearchForm.styled';
import { useNavigate, useLocation } from 'react-router-dom';
import { makeQuery } from 'utils';
import { useSelector } from 'react-redux';
const queryString = require('query-string');

function SearchForm({ showLabel, hasShadow, searchWord, locationWord }) {
  const { pathname, search } = useLocation();
  const { term: defaltTerm } = queryString.parse(search);
  const [term, setTerm] = useState(defaltTerm);
  const [location, setLocation] = useState(locationWord);
  const [autoTerms, setAutoTerms] = useState();
  const navigate = useNavigate();

  const { isLoading, total } = useSelector(
    ({ businessesReducer }) => businessesReducer,
  );

  console.log('SearchForm', { isLoading });

  const onChange = useCallback(
    e => {
      setLocation(e.target.value);
    },
    [setLocation],
  );

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const formObj = {};

      for (const [key, value] of formData.entries()) {
        formObj[key] = value;
      }
      formObj.offset = 0;

      navigate('/search?' + makeQuery(formObj));
      e.preventDefault();
    },
    [navigate],
  );

  const onAutocomplete = useCallback(
    async e => {
      setTerm(e.target.value);

      const response = await getAutocomplete({
        text: e.target.value,
      });

      setAutoTerms(response.terms.map(term => term.text));
    },
    [setAutoTerms, setTerm],
  );

  return (
    <Form onSubmit={onSubmit} hasShadow={hasShadow}>
      <Label width={480} divider={true}>
        {showLabel ? <Text>Find</Text> : <A11yHidden>Find</A11yHidden>}
        <Input
          onChange={onAutocomplete}
          name="term"
          id="term"
          list="termList"
          value={term}
          placeholder={searchWord}
        />
      </Label>
      <datalist autoComplete="off" id="termList">
        {autoTerms && autoTerms.map(term => <option value={term} key={term} />)}
      </datalist>
      <Label width={464}>
        {showLabel ? <Text>Near</Text> : <A11yHidden>Near</A11yHidden>}
        <Input name="location" value={location} onChange={onChange} />
      </Label>
      <Button
        buttonType="highlight"
        iconType={isLoading ? 'loading' : 'search'}
        flatBorderSide="left"
      />
    </Form>
  );
}

export default React.memo(SearchForm);
