import styled from 'styled-components';

export const Input = styled.input`
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
