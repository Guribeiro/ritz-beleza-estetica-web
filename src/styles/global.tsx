import { useTheme } from '@/hooks/theme';
import { createGlobalStyle } from 'styled-components';

const GlobalStyleComponent = (): JSX.Element => {
  const { theme } = useTheme();

  const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  html{
    @media(max-width: 1080px){
      font-size: 93.75%;
    }
    @media(max-width: 720px){
      font-size: 87.5%;
    }
    @media(max-width: 414px){
      font-size: 81.25%;
    }
  }
  html, body, #root{
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
  body{
    background: ${theme.colors.background};
    font-size: 1.6rem;
    color: ${theme.colors.text};
    -webkit-font-smoothing: antialiased;
  }
  button{
    background-color: transparent;
    border: 0;
    font-size: 1.6rem;
    font-family: 'Playfair Display', serif;
  }
  body, input, button, select, option{
    font: 400 1rem 'Playfair Display', serif;
  }
  h1, h2, h3, h4, h5, h6{
    font-weight: 500;
    font-family: 'Playfair Display', serif;
  }
  p {
    font-size: 1.6rem;
    font-family: 'Playfair Display', serif;
  }
  input[type="file"] {
    display: none;
  }
  a{
    text-decoration: none;
    color: ${theme.colors.text};
    font-size: 1.6rem;
    font-weight: 400;
    transition: .3s;
  }
  button{
    cursor: pointer;
    font-family: 'Nunito', sans-serif;
    font-weight: 700;
  }

  ul {
    list-style-type: none;
  }

  [disabled]{
    opacity: 0.5;
    cursor: not-allowed;
  }
  .react-modal-overlay {
    background-color: ${theme.colors.night};
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .react-modal-content{
    width: 100%;
    max-width: 1160px;
    background-color: ${theme.colors.anti_flash};
    padding: 5rem 3rem;
    position: relative;
    border-radius: 5px;
  }
  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
  }

  ::-webkit-scrollbar {
    width: 8px;
    /* display: none; */
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: ${theme.colors.bone};
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.anti_flash};
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.platinum};
  }
`;
  return <GlobalStyle />;
};

export default GlobalStyleComponent;
