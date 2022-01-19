import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from 'pages';
import { GlobalStyle } from 'styles/global.styled';
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  useSearchParams,
  useLocation,
} from 'react-router-dom';
import { InitSVG } from 'components';
import axios from 'axios';

async function call(query) {
  const { data } = await axios.get('/api' + query);

  console.log(data);
}

function Exam() {
  const { pathname, search } = useLocation();

  console.log(pathname + search);

  call(pathname + search);
  console.log('hi');

  return <div>hi</div>;
}

ReactDOM.render(
  // <React.StrictMode>
  <>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="*" element={<Exam />} />
        </Route>
      </Routes>
      <InitSVG />
    </BrowserRouter>
    {/* </React.StrictMode> */}
  </>,
  document.getElementById('root')
);
