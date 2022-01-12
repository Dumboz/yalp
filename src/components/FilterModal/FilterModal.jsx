import { Selection } from 'components/Selection/Selection';
import {
  Form,
  Button,
  List as SelectionList,
  ListItem as SelectionItem,
} from './FilterModal.styled';

export const FilterModal = ({ options }) => {
  console.log(options);
  return (
    <Form>
      <SelectionList>
        {options.map((option, key) => {
          return (
            <SelectionItem>
              <Selection
                key={key}
                type={'checkbox'}
                group={'price'}
                checked={false}
                fontSize={14}
                boxSize={18}>
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
