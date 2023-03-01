import { DefaultTheme } from 'styled-components';

export const light: DefaultTheme = {
  title: `light`,

  colors: {
    primary: `#FFA027`,

    background: `#F1F1F1`,
    text: `#151417`,
    silver: `#BEBEBE`,
    anti_flash: `#F1F1F1`,
    night: `#1E1E1E`,
    carrot_orange: `#F19A3E`,
    linx_white: `#F5F6FA`,
    ghost_white: `#F8F8FF`,
    platinum: `#E1E1E1`,
    bone: `#F0EBE4`,
  },
};

export type LightThemeType = typeof light;
