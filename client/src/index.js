import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App, SearchPage, DetailPage } from 'pages';
import { GlobalStyle } from 'styles/global.styled';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'app/store';
import { InitSVG } from 'components';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBusinesses } from 'store/features/businesses';
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
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="*" element={<Exam />} />
            {/* <Route path="search" element={<SearchPage />} />
            <Route path=":id" element={<DetailPage />} /> */}
          </Route>
        </Routes>
        <InitSVG />
      </BrowserRouter>
    </Provider>
    {/* </React.StrictMode> */}
  </>,
  document.getElementById('root'),
);
