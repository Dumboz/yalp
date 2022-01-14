import { PriceFilterButton } from './PriceFilterButton';
import { useState } from 'react';
import { ButtonGroup } from './PriceFilterButton.styled';

export function PriceFilterButtonGroup() {
  const [inexpensive, setInexpensive] = useState(false);
  const [moderate, setModerate] = useState(false);
  const [pricey, setPricey] = useState(false);
  const [expensive, setExpensive] = useState(false);

  const toggleInexpensive = () => setInexpensive(!inexpensive);
  const toggleModerate = () => setModerate(!moderate);
  const togglePricey = () => setPricey(!pricey);
  const toggleExpensive = () => setExpensive(!expensive);

  return (
    <ButtonGroup>
      <PriceFilterButton
        onClick={toggleInexpensive}
        isSelect={inexpensive}
        aria-checked={inexpensive}
      >
        $
      </PriceFilterButton>
      <PriceFilterButton onClick={toggleModerate} isSelect={moderate} aria-checked={moderate}>
        $$
      </PriceFilterButton>
      <PriceFilterButton onClick={togglePricey} isSelect={pricey} aria-checked={pricey}>
        $$$
      </PriceFilterButton>
      <PriceFilterButton onClick={toggleExpensive} isSelect={expensive} aria-checked={expensive}>
        $$$$
      </PriceFilterButton>
    </ButtonGroup>
  );
}
