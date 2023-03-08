import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;

      background: string;
      text: string;
      silver: string;
      anti_flash: string;
      night: string;
      carrot_orange: string;
      linx_white: string;
      ghost_white: string;
      platinum: string;
      bone: string;
      red: string;
    };
  }
}
