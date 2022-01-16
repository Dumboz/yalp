import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from 'pages';
import { GlobalStyle } from 'styles/global.styled';
import Button from 'components/Button/Button';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
    <Button>안녕</Button>
    <Button prop="highlight">안녕</Button>
    <Button prop="highlight" borderFlatRadius="left">
      안녕
    </Button>
    <Button contents="icon" prop="outline">
      안녕
    </Button>
  </React.StrictMode>,
  document.getElementById('root'),
);
