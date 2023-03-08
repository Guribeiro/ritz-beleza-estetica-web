import styled from 'styled-components';
import { darken } from 'polished';

import { rotate } from '@/styles/animations';

export const Container = styled.button`
  width: 100%;
  padding: 1.6rem;
  background-color: ${({ theme }) => theme.colors.carrot_orange};
  color: ${({ theme }) => theme.colors.anti_flash};
  border-radius: 0.8rem;
  font-size: 1.6rem;
  font-family: 'Playfair Display', serif;

  &:hover {
    background-color: ${({ theme }) =>
      darken(0.05, theme.colors.carrot_orange)};
  }

  > svg {
    animation: ${rotate} 2s linear infinite;
  }
`;
