import { Button } from './PriceFilterButton.styled';

export function PriceFilterButton({ isSelect, onClick, children }) {
  return (
    <Button
      isSelect={isSelect}
      onClick={onClick}
      type='button'
      role='switch'
      aria-checked={isSelect}
    >
      {children}
    </Button>
  );
}
