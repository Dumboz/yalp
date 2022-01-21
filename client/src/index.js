import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App, SearchPage, DetailPage } from 'pages';
import { GlobalStyle } from 'styles/global.styled';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'app/store';
import { InitSVG } from 'components';

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
