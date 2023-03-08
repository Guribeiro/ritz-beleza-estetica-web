import styled, { css } from 'styled-components';

import { Fieldset } from '../styles';

export const Container = styled(Fieldset)`
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

  & + fieldset {
    margin-top: 0.8rem;
  }
`;

export const Input = styled.input`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.night};
  background-color: ${({ theme }) => theme.colors.anti_flash};

  width: 100%;
  padding: 1.6rem;
  border: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.silver};
  }
`;
