import { createPortal } from 'react-dom';
import { Selection } from 'components/Selection/Selection';
import { useCallback, useRef, useReducer } from 'react';
import {
  Form,
  Button,
  HoverBalloon,
  List as SelectionList,
  ListItem as SelectionItem,
} from './FilterModal.styled';

const HoverMessage = ['Inexpensive', 'Moderate', 'Pricey', 'Ultra Hign-End'];
const initialState = [false, false, false, false];

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

export const FilterModal = ({ options }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    const { checked, id } = e.target.firstElementChild;
    const idx = Number(id.split(' ')[1]);

    checked
      ? dispatch({ type: 'UN_CHECK', id: idx })
      : dispatch({ type: 'CHECK', id: idx });
  };

  const handleMouseOver = (e) => {
    // console.log(e.target.firstElementChild);
  };

  return (
    <Form>
      <SelectionList>
        {options.map((option, key) => {
          console.log(state[key].active);
          return (
            <SelectionItem key={key} content={HoverMessage[key]}>
              <Selection
                boxSize={18}
                fontSize={14}
                group={'price'}
                type={'checkbox'}
                onClick={handleChange}
                keyProp={key.toString()}
                checked={state[key]}
                onMouseOver={handleMouseOver}>
                {option}
              </Selection>
            </SelectionItem>
          );
        })}
      </SelectionList>
      <Button fontSize={14}>Save</Button>
    </Form>
  );
};
