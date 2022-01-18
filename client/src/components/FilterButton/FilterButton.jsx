import axios from 'axios';
import { Button } from './FilterButton.styled';
import { Spinner } from 'components/Spinner/Spinner';

axios.defaults.withCredentials = true;

export const FilterButton = ({ children }) => {
  const handleClick = (e) => {
    const spinnerElement = document.getElementsByClassName('spinner')[0];

    spinnerElement.classList.add('active');
    setTimeout(() => {
      spinnerElement.classList.remove('active');
    }, 2000);
  };

  return (
    <Button onClick={handleClick}>
      {children}
      <Spinner className={'spinner'} />
    </Button>
  );
};
