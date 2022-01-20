import React, { useState, useEffect } from 'react';
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
import { useSelector, useDispatch } from 'react-redux';
import { fetchBusinesses } from 'store/features/businesses';
import { StoreProvider } from './store';

async function call(query, setState) {
  const { data } = await axios.get('/api' + query);
  setState(data);
  return { data };
}

const Exam = () => {
  const dispatch = useDispatch();
  const { pathname, search } = useLocation();

  useEffect(() => {
    // call(pathname + search, setState);
    dispatch(fetchBusinesses(pathname + search));
    console.log({ url: pathname + search });
  }, []);

  const businessesReducer = useSelector(
    ({ businessesReducer }) => businessesReducer,
  );
  console.log({ businessesReducer });
  return <div>{JSON.stringify(businessesReducer)}</div>;
};

ReactDOM.render(
  // <React.StrictMode>
  <>
    <GlobalStyle />
    <BrowserRouter>
      <StoreProvider>
        <Routes>
          <Route path="/" element={<App />}>
            {/* <Route path="search" element={<SearchPage />} />
          <Route path=":id" element={<DetailPage />} /> */}
            <Route path="*" element={<Exam />} />
          </Route>
        </Routes>
        <InitSVG />
      </StoreProvider>
    </BrowserRouter>
    {/* </React.StrictMode> */}
  </>,
  document.getElementById('root'),
);
