import { A11yHidden } from 'components/A11yHidden/A11yHidden';
import Button from 'components/Button/Button';
import React, { useState, useCallback } from 'react';
import { getAutocomplete } from 'api';
import { Label, Text, Input, Form } from './SearchForm.styled';

function SearchForm({ showLabel, hasShadow, searchWord, locationWord }) {
  const [location, setLocation] = useState(locationWord);
  const [autoTerms, setAutoTerms] = useState();

  const onChange = useCallback(
    (e) => {
      setLocation(e.target.value);
    },
    [setLocation]
  );

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log('onsubmit');
    for (const [key, value] of formData.entries()) {
      console.log({ key, value });
    }
  }, []);

  const onAutocomplete = useCallback(
    async (e) => {
      try {
        const response = await getAutocomplete({
          text: e.target.value,
          latitude: 37.786942,
          longitude: -122.399643,
        });

        console.log(e.target.value, { response });

        setAutoTerms(response.terms.map((term) => term.text));
      } catch (e) {
        console.error('In searchForm, onAutocomplete function > ', e.message);
      }
    },
    [setAutoTerms]
  );

  return (
    <Form onSubmit={onSubmit} hasShadow={hasShadow}>
      <Label width={480} divider={true}>
        {showLabel ? <Text>Find</Text> : <A11yHidden>Find</A11yHidden>}
        <Input
          onChange={onAutocomplete}
          name="description"
          id="description"
          list="descriptionList"
          placeholder={searchWord}
        />
      </Label>
      <datalist autoComplete="off" id="descriptionList">
        {autoTerms &&
          autoTerms.map((term) => <option value={term} key={term} />)}
      </datalist>
      <Label width={464}>
        {showLabel ? <Text>Near</Text> : <A11yHidden>Near</A11yHidden>}
        <Input name="location" value={location} onChange={onChange} />
      </Label>
      <Button buttonType="highlight" iconType="search" flatBorderSide="left" />
    </Form>
  );
}

export default React.memo(SearchForm);
