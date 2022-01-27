import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App, SearchPage, DetailPage, PageNotFound } from 'pages';
import { GlobalStyle } from 'styles/global.styled';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { StoreProvider } from './store';
import { InitSVG } from 'components';

const defaultQuery =
  'search?term=restaurant&location=New%20York&offset=0&radius=800&limit=10';

ReactDOM.render(
  // <React.StrictMode>
  <>
    <GlobalStyle />
    <HelmetProvider>
      <StoreProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route
                index
                element={<Navigate to={defaultQuery} replace={true} />}
              />
              <Route path="search" element={<SearchPage />} />
              <Route path="restaurant/:id" element={<DetailPage />} />
              <Route path="page-not-found" element={<PageNotFound />} />
              <Route
                path="*"
                element={<Navigate to="page-not-found" replace={true} />}
              />
            </Route>
          </Routes>
          <InitSVG />
        </BrowserRouter>
      </StoreProvider>
    </HelmetProvider>
    {/* </React.StrictMode> */}
  </>,
  document.getElementById('root')
);
