import { Selection } from 'components/Selection/Selection';
import { useState, useCallback, useRef } from 'react';
import {
  Form,
  Button,
  HoverBalloon,
  List as SelectionList,
  ListItem as SelectionItem,
} from './FilterModal.styled';

const HoverMessage = ['Inexpensive', 'Moderate', 'Pricey', 'Ultra Hign-End'];

export const FilterModal = ({ options }) => {
  const balloon = Array.from({ length: options.length }, () => useRef(null));

  const handleMouseOver = () => {};

  return (
    <Form>
      <SelectionList>
        {options.map((option, key) => {
          return (
            <SelectionItem key={key}>
              <Selection
                boxSize={18}
                fontSize={14}
                group={'price'}
                checked={false}
                type={'checkbox'}
                keyProp={key.toString()}
                onMouseOver={handleMouseOver}>
                {option}
              </Selection>
              <HoverBalloon ref={balloon[key]} className={'balloon'}>
                {HoverMessage[key]}
              </HoverBalloon>
            </SelectionItem>
          );
        })}
      </SelectionList>
      <Button fontSize={14}>Save</Button>
    </Form>
  );
};
