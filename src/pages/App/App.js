import './App.css';
import { InitSVG, Icon } from 'components';

export function App() {
  return (
    <>
      <div className="App">Yalp!</div>
      <Icon />
      {/* 한 번이상 렌더링 되지 않는 로직 작성하기 */}
      <InitSVG />
    </>
  );
}

export default App;
