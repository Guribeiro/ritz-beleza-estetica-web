import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;

  background: ${({ theme }) => theme.colors.carrot_orange};

  > section {
    max-width: 980px;
    width: 100%;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 2.3rem 1.2rem;

    button {
      right: 0;
      color: white;
      border: none;
      border-radius: 4px;
      padding: 1rem 2rem;
      font-size: 1.6rem;
      position: relative;
      cursor: pointer;
    }
  }
`;
