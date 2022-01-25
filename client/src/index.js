import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App, SearchPage, DetailPage } from 'pages';
import { GlobalStyle } from 'styles/global.styled';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { StoreProvider } from './store';
import { InitSVG } from 'components';
import { useSelector, useDispatch } from 'react-redux';
import { updateBusinesses } from 'store/businesses';
import styled from 'styled-components';
import { useGetBusinessesQuery } from 'services/businesses';

const StyledExam = styled.div`
  margin-top: 100px;
  background-color: yellow;
  width: 100%;
  min-height: 100px;
`;

const Exam = () => {
  const dispatch = useDispatch();
  const { pathname, search } = useLocation();

  const { data, error, isLoading } = useGetBusinessesQuery(search);
  if (isLoading) {
    dispatch(updateBusinesses({ error, isLoading }));
  } else {
    dispatch(
      updateBusinesses({
        businesses: data.businesses,
        total: data.total,
        region: data.region,
        error,
        isLoading,
      })
    );
  }

  const { businesses, total, region } = useSelector(
    ({ businessesReducer }) => businessesReducer
  );

  return (
    <StyledExam>
      <div>{'total' + !isLoading && JSON.stringify(total)}</div>
      <div>{'region' + !isLoading && JSON.stringify(region)}</div>
      <div>{JSON.stringify(businesses)}</div>
    </StyledExam>
  );
};

ReactDOM.render(
  // <React.StrictMode>
  <>
    <GlobalStyle />
    <StoreProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            {/* <Route path="*" element={<Exam />} /> */}
            <Route path="search" element={<SearchPage />} />
            <Route path=":id" element={<DetailPage />} />
          </Route>
        </Routes>
        <InitSVG />
      </BrowserRouter>
    </StoreProvider>
    {/* </React.StrictMode> */}
  </>,
  document.getElementById('root')
);
