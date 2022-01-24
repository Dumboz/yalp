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

ReactDOM.render(
  // <React.StrictMode>
  <>
    <GlobalStyle />
    <StoreProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="search" element={<SearchPage />} />
            <Route path=":id" element={<DetailPage />} />
          </Route>
        </Routes>
        <InitSVG />
      </BrowserRouter>
    </StoreProvider>
    {/* </React.StrictMode> */}
  </>,
  document.getElementById('root'),
);
