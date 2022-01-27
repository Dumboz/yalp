import { StrictMode, lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from 'styles/global.styled';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { StoreProvider } from './store';
import { InitSVG } from 'components';
import { Circles } from 'react-loader-spinner';
import { getHexaColor } from 'styles/color';

const App = lazy(() => import('pages/App/App'));
const SearchPage = lazy(() => import('pages/SearchPage/SearchPage'));
const DetailPage = lazy(() => import('pages/DetailPage/DetailPage'));
const PageNotFound = lazy(() => import('pages/PageNotFound/PageNotFound'));

const defaultQuery =
  'search?term=restaurant&location=New%20York&offset=0&radius=800&limit=10';

ReactDOM.render(
  <StrictMode>
    <GlobalStyle />
    <HelmetProvider>
      <StoreProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Suspense
                  fallback={<Circles color={getHexaColor('primary', 300)} />}>
                  <App />
                </Suspense>
              }>
              <Route
                index
                element={<Navigate to={defaultQuery} replace={true} />}
              />
              <Route
                path="search"
                element={
                  <Suspense
                    fallback={<Circles color={getHexaColor('primary', 300)} />}>
                    <SearchPage />
                  </Suspense>
                }
              />
              <Route
                path="restaurant/:id"
                element={
                  <Suspense
                    fallback={<Circles color={getHexaColor('primary', 300)} />}>
                    <DetailPage />
                  </Suspense>
                }
              />
              <Route
                path="page-not-found"
                element={
                  <Suspense
                    fallback={<Circles color={getHexaColor('primary', 300)} />}>
                    <PageNotFound />
                  </Suspense>
                }
              />
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
  </StrictMode>,
  document.getElementById('root')
);
