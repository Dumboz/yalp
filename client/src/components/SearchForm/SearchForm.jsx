import { A11yHidden } from 'components/A11yHidden/A11yHidden';
import Button from 'components/Button/Button';
import React, { useState, useCallback } from 'react';
import { Label, Text, Input, Form } from './SearchForm.styled';

function SearchForm({ showLabel, hasShadow, searchWord, locationWord }) {
  const [location, setLocation] = useState(locationWord);

  const onChange = useCallback(
    e => {
      setLocation(e.target.value);
    },
    [setLocation],
  );

  return (
    <Form hasShadow={hasShadow}>
      <Label width={480} divider={true}>
        {showLabel ? <Text>Find</Text> : <A11yHidden>Find</A11yHidden>}
        <Input placeholder={searchWord} />
      </Label>
      <Label width={464}>
        {showLabel ? <Text>Near</Text> : <A11yHidden>Near</A11yHidden>}
        <Input value={location} onChange={onChange} />
      </Label>
      <Button buttonType="highlight" iconType="search" flatBorderSide="left" />
    </Form>
  );
}

export default React.memo(SearchForm);
