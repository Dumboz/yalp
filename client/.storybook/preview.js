import { GlobalStyle } from '../src/styles/global.styled';
import { InitSVG } from '../src/components/InitSVG/InitSVG';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from '../src/store';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
export const decorators = [
  Story => (
    <>
      <StoreProvider>
        <GlobalStyle />
        <BrowserRouter>
          <Story />
        </BrowserRouter>
        <InitSVG />
      </StoreProvider>
    </>
  ),
];
