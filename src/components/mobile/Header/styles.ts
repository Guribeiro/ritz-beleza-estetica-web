import styled, { css } from 'styled-components';
import { darken } from 'polished';

const dropdownVisible = css`
  border: 1px solid red;
  top: 4.7rem;
`;

const dropdownHidden = css`
  border: 1px solid blue;
  top: -14.6rem;
`;

export const Container = styled.header`
  z-index: 1;
  width: 100%;
  position: fixed;

  > article {
    padding: 1.2rem;
    width: 100%;

    position: absolute;
    z-index: 2;

    background: rgba(241, 241, 241, 0.22);
    backdrop-filter: blur(5.9px);
    -webkit-backdrop-filter: blur(5.9px);

    transition: 300ms;

    &.opened {
      animation: ${dropdownVisible} 300ms;
    }

    &.closed {
      animation: ${dropdownHidden} 300ms;
    }

    > ul {
      padding: 1.2rem 0;
      list-style: none;

      > li {
        display: flex;
        align-items: center;
        justify-content: baseline;

        padding: 1rem;

        font-size: 0.8rem;
        color: ${({ theme }) => theme.colors.night};

        > a:hover {
          color: ${({ theme }) => theme.colors.carrot_orange};
        }

        &::before {
          content: '';
          height: 1px;
          width: 100%;
          max-width: 2rem;
          background-color: ${({ theme }) => theme.colors.carrot_orange};
          margin-right: 0.9rem;
        }
      }
    }
  }

  > section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row-reverse;
    z-index: 2;
    position: absolute;
    width: 100%;

    background: rgba(241, 241, 241, 0.22);

    backdrop-filter: blur(5.9px);
    -webkit-backdrop-filter: blur(5.9px);
    padding: 0 1.2rem;

    > h3 {
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
