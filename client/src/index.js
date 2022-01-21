import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App, SearchPage, DetailPage } from 'pages';
import { GlobalStyle } from 'styles/global.styled';
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  useSearchParams,
  useLocation,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'app/store';
import { InitSVG } from 'components';
import axios from 'axios';

// const yelp = require('yelp-fusion');

async function call(query) {
  const { data } = await axios.get('/api' + query);

  console.log(data);
}

function Exam() {
  // const params = useParams();
  // const [searchParams, setSearchParams] = useSearchParams();
  const { pathname, search } = useLocation();

  console.log(pathname + search);

  // const query = params['*'] + '?' + searchParams;
  call(pathname + search);
  console.log('hi');

  return <div>hi</div>;
}

ReactDOM.render(
  // <React.StrictMode>
  <>
    <GlobalStyle />
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="search" element={<SearchPage />} />
            <Route path=":id" element={<DetailPage />} />
          </Route>
        </Routes>
        <InitSVG />
      </BrowserRouter>
    </Provider>
    {/* </React.StrictMode> */}
  </>,
  document.getElementById('root')
);
