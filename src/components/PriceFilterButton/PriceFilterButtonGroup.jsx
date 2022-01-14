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

  // const [priceList, setPriceList] = useState(new Array(4).fill(false));
  // const content = '';
  // const handleSelect = select => {
  //   const toggleState = priceList.map((check, idx) => {
  //     if (idx === select) content = repeatWord('$', idx + 1);
  //     return setPriceList(!check);
  //   });
  //   return (
  //     <ButtonGroup>
  //       <PriceFilterButton onClick={handleSelect} isSelect={priceList} aria-checked={priceList}>
  //         {content}
  //       </PriceFilterButton>
  //     </ButtonGroup>
  //   );
  // };
}
