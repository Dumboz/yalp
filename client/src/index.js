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
import styled from 'styled-components';

const StyledExam = styled.div`
  margin-top: 100px;
  background-color: yellow;
  width: 100%;
  min-height: 100px;
`;

const Exam = () => {
  const dispatch = useDispatch();
  const { pathname, search } = useLocation();

  useEffect(() => {
    console.log(fetchBusinesses(pathname + search));

    dispatch(fetchBusinesses(pathname + search));
    console.log({ url: pathname + search });
  }, [pathname, search, dispatch]);

  const businessesReducer = useSelector(
    ({ businessesReducer }) => businessesReducer,
  );
  return (
    <StyledExam>
      <div>{`offset:` + businessesReducer.offset}</div>
      <div>{`total:` + businessesReducer.total}</div>
      <div>{`region:` + businessesReducer.region}</div>
      <div>{JSON.stringify(businessesReducer)}</div>
    </StyledExam>
  );
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
