import { GlobalStyle } from '../src/styles/global.styled';
import { InitSVG } from '../src/components/InitSVG/InitSVG';

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
      <GlobalStyle />
      <Story />
      <InitSVG />
    </>
  ),
];
