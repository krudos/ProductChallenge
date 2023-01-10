import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: {
      grey: string;
      black: string;
      white: string;
      softGrey: string;
      blue: string;
    };
  }
}
 