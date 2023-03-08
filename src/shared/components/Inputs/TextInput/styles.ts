import styled from 'styled-components';

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
