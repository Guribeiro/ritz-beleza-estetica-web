import styled from 'styled-components';
import { pulse } from '@/styles/animations';

export const Container = styled.section`
  min-height: 100vh;
  display: flex;

  > a {
    position: fixed;
    bottom: 2.3rem;
    right: 1.2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 1.4rem;
    border-radius: 2rem;
    background: ${({ theme }) => theme.colors.carrot_orange};

    border: 1px solid ${({ theme }) => theme.colors.anti_flash};

    transition: 300ms;
    animation: ${pulse} 2s infinite;

    > svg {
      color: ${({ theme }) => theme.colors.bone};
    }
  }

  > article {
    width: 100%;
    margin: 4.4rem auto 0;
    padding: 4rem 2.3rem 2.25rem;

    text-align: center;

    h3 {
      font-family: 'Playfair Display', serif;
      font-size: 2.625rem;

      > span {
        color: ${({ theme }) => theme.colors.primary};
      }
    }

    > p {
      margin-top: 1.6rem;
      font-size: 1.2rem;
    }

    > ul {
      margin-top: 2rem;
      padding: 1.2rem 0;
      list-style: none;

      > li {
        display: flex;
        align-items: center;
        justify-content: baseline;

        padding: 0.4rem;

        font-size: 1rem;
        color: ${({ theme }) => theme.colors.silver};

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
        width: 27.125rem;
        height: 28.125rem;
        transition: 300ms;

        @media (min-width: 680px) {
          width: 37.125rem;
          height: 38.125rem;
        }

        @media (min-width: 1200px) {
          width: 47.125rem;
          height: 48.125rem;
        }
      }
    }
  }
`;
