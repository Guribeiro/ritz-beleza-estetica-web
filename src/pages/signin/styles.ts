import styled, { keyframes } from 'styled-components';
import signinBackground from '@/assets/signin/background.png';
import { StaticImageData } from 'next/image';
import { shade } from 'polished';

const { src } = signinBackground as StaticImageData;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px)
  }
  to {
    opacity: 1;
    transform: translateX(0)
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromLeft} 1s;

  > a {
    color: #ff9000;
    display: block;
    margin-top: 2.4rem;
    text-decoration: none;
    transition: color 0.3s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, `#ff9000`)};
    }
  }
`;

export const Container = styled.main`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Background = styled.section`
  flex: 1;
  background: ${({ theme }) => theme.colors.carrot_orange};
`;

export const CoverImage = styled.div`
  background: url(${src}) no-repeat center;
  background-size: contain;
  height: 100%;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 4.2rem 3rem;

  h1 {
    font-size: 4.2rem;
    color: ${({ theme }) => theme.colors.night};
  }

  p {
    color: ${({ theme }) => theme.colors.night};
    margin-top: 1.6rem;
  }

  strong {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.night};

    > a {
      margin-left: 0.2rem;
      color: ${({ theme }) => theme.colors.carrot_orange};
      text-decoration: underline;

      &:hover {
        color: ${({ theme }) => shade(0.1, theme.colors.carrot_orange)};
      }
    }
  }

  > form {
    max-width: 52rem;
    width: 100%;

    text-align: center;
    margin-bottom: 2rem;

    display: flex;
    flex-direction: column;

    > button {
      margin-top: 1.6rem;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.3s;

      &:hover {
        color: ${shade(0.2, `#f4ede8`)};
      }
    }
  }
`;
