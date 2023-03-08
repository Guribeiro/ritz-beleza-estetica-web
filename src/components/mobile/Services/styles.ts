import styled from 'styled-components';
import { pulse } from '@/styles/animations';

export const Container = styled.section`
  display: flex;
  background-color: ${({ theme }) => theme.colors.bone};

  > article {
    width: 100%;
    margin: 4.4rem auto 0;
    padding: 4rem 0 2.25rem;

    h2 {
      font-size: 2.2rem;
      text-align: center;
      margin: 0 auto;
      padding: 0 2.3rem;
    }

    h3 {
      margin: 1.6rem 0;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.carrot_orange};
      text-align: center;
    }

    > section {
      padding-left: 2.3rem;
      display: flex;
      align-items: center;

      overflow-x: scroll;

      scrollbar-width: thin;
      -ms-overflow-style: none;
      padding-right: 2.3rem;

      > img {
        width: 32.8rem;
        height: 22.6rem;

        & + img {
          margin-left: 1.6rem;
        }
      }
    }

    > .circle {
      border: 1px solid ${({ theme }) => theme.colors.carrot_orange};
      position: relative;
      bottom: -6rem;
      left: 50%;
      transform: translate(-50%);
      border-radius: 50%;

      height: 7rem;
      width: 7rem;
      transition: 300ms;
      animation: ${pulse} 2s infinite;

      &:hover {
        > a > span {
          &::after {
            width: 100%;
          }
        }
      }

      > a {
        span {
          position: absolute;
          font-size: 1.2rem;
          bottom: 30%;
          left: 10%;
          width: 11rem;
          color: ${({ theme }) => theme.colors.night};
          padding: 0.4rem 0;
          transition: 300ms;

          &::after {
            content: '';
            width: 2rem;
            border: 1px solid ${({ theme }) => theme.colors.carrot_orange};
            position: absolute;
            bottom: 0;
            left: 0;
            transition: 300ms;
          }
        }
      }
    }
  }
`;
