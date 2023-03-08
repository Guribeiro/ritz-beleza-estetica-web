import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused?: boolean;
  isErrored?: boolean;
  isFilled?: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  padding-top: 2rem;

  > label {
    position: absolute;
    font-size: 1rem;
    top: 0;
    display: inline-block;
    color: ${({ theme }) => theme.colors.night};
    font-weight: 600;
    text-transform: uppercase;

    ${({ isErrored, theme }) =>
      isErrored &&
      css`
        color: ${theme.colors.red};
      `}

    ${({ isFocused, theme }) =>
      isFocused &&
      css`
        color: ${theme.colors.carrot_orange};
      `}


  ${({ isFilled, isErrored, theme }) =>
      isFilled &&
      !isErrored &&
      css`
        color: ${theme.colors.carrot_orange};
      `}
  }

  > fieldset {
    border: 1px solid ${({ theme }) => theme.colors.platinum};

    border-radius: 0.8rem;
    overflow: hidden;

    ${({ isErrored, theme }) =>
      isErrored &&
      css`
        border-color: ${theme.colors.red};
      `}

    ${({ isFocused, theme }) =>
      isFocused &&
      css`
        border-color: ${theme.colors.carrot_orange};
      `}


  ${({ isFilled, isErrored, theme }) =>
      isFilled &&
      !isErrored &&
      css`
        border-color: ${theme.colors.carrot_orange};
      `}
  }
`;

export const Content = styled.fieldset`
  > span {
    color: ${({ theme }) => theme.colors.red};
    font-size: 1.2rem;
    position: absolute;
    right: 0.5rem;
    bottom: 0.2rem;
  }

  .row {
    display: flex;
    align-items: center;

    > button {
      padding: 0.8rem;

      > svg {
        color: ${({ theme }) => theme.colors.silver};
      }
    }
  }

  & + fieldset {
    margin-top: 0.8rem;
  }
`;
