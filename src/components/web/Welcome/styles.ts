import styled from 'styled-components';
import { darken } from 'polished';
import { pulse } from '@/styles/animations';

export const Container = styled.section`
  min-height: 100vh;
  display: flex;

  > article {
    max-width: 980px;
    width: 100%;
    margin: 2.4rem auto 0;
    padding: 10rem 0 4.25rem;

    display: flex;
    justify-content: space-between;

    > aside {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      &.right-side {
        display: flex;
        justify-items: end;
        align-content: flex-end;
        flex-direction: column;

        > section {
          width: 20rem;

          > h4 {
            font-size: 1.6rem;
            text-align: end;
            width: 100%;
          }

          > p {
            color: ${({ theme }) => theme.colors.silver};
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
          }

          > h2 {
            font-size: 2.8rem;
            text-align: center;
          }

          > a {
            margin-top: 0.8rem;
            border-radius: 0.8rem;
            font-size: 1.2rem;
            width: 100%;
            padding: 1.4rem;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: ${({ theme }) => theme.colors.carrot_orange};
            color: ${({ theme }) => theme.colors.anti_flash};

            transition: 300ms;
            animation: ${pulse} 2s infinite;

            &:hover {
              background-color: ${({ theme }) =>
                darken(0.05, theme.colors.carrot_orange)};
            }

            svg {
              margin-right: 0.8rem;
            }
          }
        }
      }

      > section {
        width: 26rem;

        h3 {
          font-family: 'Playfair Display', serif;
          font-size: 2.625rem;

          > span {
            color: ${({ theme }) => theme.colors.primary};
          }
        }

        p {
          margin-top: 1.6rem;
          font-size: 1.2rem;
        }

        > ul {
          padding: 1.2rem 0;
          border-top: 1px solid ${({ theme }) => theme.colors.platinum};
          list-style: none;

          > li {
            display: flex;
            align-items: center;
            justify-content: baseline;

            padding: 0.4rem;

            font-size: 1rem;
            color: ${({ theme }) => theme.colors.silver};
            transition: 300ms;

            &:hover {
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
    }

    figure {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%);

      img {
        margin: 0 auto;
        width: 57.125rem;
        height: 58.125rem;
      }
    }
  }
`;
