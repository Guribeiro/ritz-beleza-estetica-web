import styled from 'styled-components';

export const Container = styled.main`
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  section {
    width: 100%;
    max-width: 50.2rem;

    border-radius: 2rem;
    padding: 4rem 3rem;
    border: 1px solid ${({ theme }) => theme.colors.platinum};

    h3 {
      font-size: 3.2rem;
      text-align: center;
    }

    p {
      font-size: 1.6rem;
      text-align: center;
      margin: 1.6rem 0 2.6rem;
    }
  }
`;

export const Form = styled.form`
  > button {
    margin-top: 1.6rem;
  }
`;
