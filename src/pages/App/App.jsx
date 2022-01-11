import { DetailMenuCard } from 'components/DetailMenuCard/DetailMenuCard';
import './App.css';
import { PriceFilterButton } from 'components/PriceFilterButton/PriceFilterButton';

export function App() {
  return (
    <>
      <div className='App'>Yalp!</div>
      <PriceFilterButton />
      <DetailMenuCard />
    </>
  );
}

export default App;
