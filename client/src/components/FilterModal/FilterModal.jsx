import { fireEvent } from '@testing-library/react';
import { Selection } from 'components/Selection/Selection';
import { useReducer, useCallback, useRef } from 'react';
import {
  Form,
  Button,
  List as SelectionList,
  ListItem as SelectionItem,
} from './FilterModal.styled';

const options = ['$', '$$', '$$$', '$$$$'];
const HoverMessage = ['Inexpensive', 'Moderate', 'Pricey', 'Ultra Hign-End'];
const initialState = new Array(HoverMessage.length).fill(false);
const reducer = (state, action) => {
  switch (action.type) {
    case 'CHECK':
      state[action.id] = true;
      return [...state];
    case 'UN_CHECK':
      state[action.id] = false;
      return [...state];
    default:
      return state;
  }
};

export const FilterModal = ({ className, changeChildren }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const selectionsRef = useRef([]);
  const buttonRef = useRef(null);

  const handleChange = (target) => {
    const { checked, id } = target.firstElementChild;
    const idx = Number(id.split(' ')[1]);

    checked
      ? dispatch({ type: 'UN_CHECK', id: idx })
      : dispatch({ type: 'CHECK', id: idx });
  };

  const handleKeyDown = useCallback((e) => {
    // old browser may return 'Spacebar' instead of ' '
    if (
      !e.target.matches('button') &&
      (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar')
    )
      handleChange(e.target.firstElementChild);

    // 'Down' & 'Up' for IE
    if (e.key === 'ArrowDown' || e.key === 'Down') {
      const activeElement = document.activeElement;
      const nextElement = activeElement.nextElementSibling;
      const firstElement = selectionsRef.current[0];

      nextElement ? nextElement.focus() : firstElement.focus();
    }

    if (e.key === 'ArrowUp' || e.key === 'Up') {
      const activeElement = document.activeElement;
      const previousElement = activeElement.previousElementSibling;
      const lastElement = buttonRef.current;

      previousElement ? previousElement.focus() : lastElement.focus();
    }
  }, []);

  return (
    <Form className={className}>
      <SelectionList>
        {options.map((option, key) => {
          return (
            <SelectionItem
              key={key}
              ref={(ref) => (selectionsRef.current[key] = ref)}
              content={HoverMessage[key]}
              tabIndex={'-1'}
              onKeyDown={handleKeyDown}>
              <Selection
                boxSize={18}
                fontSize={14}
                group={'price'}
                type={'checkbox'}
                onClick={(e) => {
                  handleChange(e.target);
                  changeChildren(e);
                }}
                keyProp={key.toString()}
                checked={state[key]}
                content={HoverMessage[key]}>
                {option}
              </Selection>
            </SelectionItem>
          );
        })}
        <Button
          fontSize={14}
          tabIndex={'-1'}
          onKeyDown={handleKeyDown}
          ref={buttonRef}>
          Save
        </Button>
      </SelectionList>
    </Form>
  );
};
