import styled from 'styled-components';
import { PriceFilterButton } from './PriceFilterButton';
import { useState } from 'react';

const ButtonGroup = styled.ul`
  & > button {
    border: 1px solid black;
    border-right: none;
  }
  & > button:first-child {
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
  }
  & > button:last-child {
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
    border-right: 1px solid black;
  }
  & > button:hover {
    background-color: #c7c5c5;
  }
`;

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
        {/* {'$'.repeat(i + 1)} */} $
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
