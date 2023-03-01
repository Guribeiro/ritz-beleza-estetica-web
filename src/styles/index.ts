import { lighten, darken } from 'polished';
import styled, { css } from 'styled-components';

export const Main = styled.main`
  max-width: 1120px;
  padding: 2rem;
  margin: 0 auto;

  @media (max-width: 325px) {
    footer {
      justify-content: center;

      a {
        width: 100%;
      }
    }
  }

  figure {
    margin: 1.6rem 0 2rem;
    text-align: center;
    align-items: center;
    justify-content: center;

    img {
      height: 12rem;
      width: 12rem;
      border-radius: 6rem;
    }

    figcaption {
      margin-top: 2rem;

      a {
        & + a {
          margin-left: 5rem;
        }

        svg {
          transition: 300ms;
        }

        &:hover {
          .twitter {
            fill: #1da1f2;
            stroke: #1da1f2;
          }

          .instagram {
            stroke: #833ab4;
          }

          .linkedin {
            stroke: #2867b2;
            fill: #2867b2;
          }
        }
      }
    }

    button {
      font-weight: 400;
      margin-top: 4rem;
      font-size: 1.6rem;
      padding: 1.6rem 3.2rem;
      color: ${({ theme }) => theme.colors.primary};
      border: 1px solid ${({ theme }) => theme.colors.primary};
      transition: transform ease 300ms;
      font-weight: 500;

      &:hover {
        color: ${({ theme }) => darken(0.1, theme.colors.background)};
        background-color: ${({ theme }) => theme.colors.primary};
        transform: translateY(-4px);
      }

      &:active {
        transform: translateY(4px);
      }
    }
  }

  article {
    border-bottom: 1px solid #1b1b1d;
    padding: 2rem 0;
  }

  > footer {
    display: flex;
    margin-top: 2rem;
  }
`;

export const LanguageContainer = styled.section`
  display: flex;
  align-items: flex-end;
  justify-content: end;

  margin-bottom: 1.6rem;
`;

export const MainColorSwitcherContainer = styled.section`
  margin-bottom: 1rem;
`;
