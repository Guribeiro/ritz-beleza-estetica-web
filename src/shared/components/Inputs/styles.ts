import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused?: boolean;
  isErrored?: boolean;
  isFilled?: boolean;
}

export const Fieldset = styled.fieldset<ContainerProps>`
  border: 1px solid ${({ theme }) => theme.colors.platinum};

  position: relative;

  border-radius: 0.8rem;
  overflow: hidden;

  ${({ isFocused, theme }) =>
    isFocused &&
    css`
      border-color: ${theme.colors.carrot_orange};
    `}

  ${({ isErrored, theme }) =>
    isErrored &&
    css`
      border-color: ${theme.colors.red};
    `}


  ${({ isFilled, isErrored, theme }) =>
    isFilled &&
    !isErrored &&
    css`
      border-color: ${theme.colors.carrot_orange};
    `}

  > span {
    color: red;
    font-size: 1.2rem;
    position: absolute;
    right: 0.5rem;
    bottom: 0.2rem;
  }

  & + fieldset {
    margin-top: 0.8rem;
  }
`;
