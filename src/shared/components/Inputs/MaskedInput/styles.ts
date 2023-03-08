import styled from 'styled-components';

import { Fieldset } from '../styles';

import ReactInputMask from 'react-input-mask';

export const Container = styled(Fieldset)`
  & + fieldset {
    margin-top: 0.8rem;
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
`;

export const Input = styled(ReactInputMask)`
  color: ${({ theme }) => theme.colors.night};
  font-size: 1.6rem;
  background-color: ${({ theme }) => theme.colors.anti_flash};

  width: 100%;
  padding: 1.6rem;
  border: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.silver};
  }
`;
