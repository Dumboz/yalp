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
import { InitSVG } from 'components';

ReactDOM.render(
  // <React.StrictMode>
  <>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="search" element={<SearchPage />} />
          <Route path=":id" element={<DetailPage />} />
        </Route>
      </Routes>
      <InitSVG />
    </BrowserRouter>
    {/* </React.StrictMode> */}
  </>,
  document.getElementById('root')
);
