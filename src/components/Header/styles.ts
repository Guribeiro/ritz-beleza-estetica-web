import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.header`
  width: 100%;
  z-index: 99;
  position: fixed;

  background: rgba(241, 241, 241, 0.22);
  /* box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); */
  backdrop-filter: blur(5.9px);
  -webkit-backdrop-filter: blur(5.9px);

  > section {
    max-width: 980px;
    width: 100%;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 1.8rem 1.2rem;

    border-bottom-width: 1px;
    border-bottom-color: ${({ theme }) => theme.colors.platinum};
    border-bottom-style: solid;

    > button {
      right: 0;
      color: ${({ theme }) => theme.colors.carrot_orange};
      border-radius: 0.4rem;
      padding: 1rem 3rem;
      font-size: 1rem;
      position: relative;
      font-family: 'Italiana', serif;
      background-color: transparent;
      border: 1px solid ${({ theme }) => theme.colors.carrot_orange};
      transition: 300ms;
      text-transform: uppercase;

      &:hover {
        background-color: ${({ theme }) => theme.colors.carrot_orange};
        color: ${({ theme }) => theme.colors.background};
      }
    }

    h3 {
      margin: 0;
      font-size: 2.8rem;
      position: absolute;
      left: 50%;
      transform: translate(-50%);
      font-family: 'Italiana', serif;
    }

    nav {
      ul {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        li {
          & + li {
            margin-left: 5.6rem;
          }

          a {
            font-size: 1.4rem;
            transition: 300ms;

            &:hover {
              color: ${({ theme }) => darken(0.1, theme.colors.carrot_orange)};
            }
          }
        }
      }
    }
  }
`;
