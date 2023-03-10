import * as styledComponents from 'styled-components/native';

const theme: styledComponents.DefaultTheme = {
  colors: {
    grey: '#a0a0a0',
    darkGrey: '#414141',
    black: '#1c1c1c',
    white: '#ffffff',
    softGrey: '#e3e3e3',
    blue: '#86a1b9',
  },
};

const {default: styled} =
  styledComponents as styledComponents.ReactNativeThemedStyledComponentsModule<styledComponents.DefaultTheme>;

export {theme};
export default styled;
