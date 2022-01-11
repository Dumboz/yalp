import './App.css';
import { InitSVG, Icon, Comment } from 'components';

export function App() {
  return (
    <>
      <div className="App">Yalp!</div>
      <Icon type="calendar" size={100} />
      <Comment title="안녕" iconType="calendar" size={32}>
        I dream about this place. And I'm a very picky pizza eater. Super saucy,
        fresh, thick, perfectly greasy, hot, yum, yum. Plus the employees are
        totally great and looking out for the hihihihihihihihihihihihi
      </Comment>
      {/* 한 번이상 렌더링 되지 않는 로직 작성하기 */}
      <InitSVG />
    </>
  );
}

export default App;
