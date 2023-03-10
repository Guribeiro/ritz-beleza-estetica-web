import styled, { css } from 'styled-components';
import { darken } from 'polished';

import { rotate } from '@/styles/animations';

interface ContainerProps {
  loading?: boolean;
}

export const Container = styled.button<ContainerProps>`
  width: 100%;
  padding: 1.6rem;
  background-color: ${({ theme }) => theme.colors.carrot_orange};
  color: ${({ theme }) => theme.colors.anti_flash};
  border-radius: 0.8rem;
  font-size: 1.6rem;
  font-family: 'Playfair Display', serif;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ theme }) =>
      darken(0.05, theme.colors.carrot_orange)};
  }

  > svg {
    ${({ loading }) =>
      loading &&
      css`
        animation: ${rotate} 2s linear infinite;
      `}
  }
`;
