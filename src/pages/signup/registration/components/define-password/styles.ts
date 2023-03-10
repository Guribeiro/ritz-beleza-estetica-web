import styled from 'styled-components';

export const Container = styled.main`
  padding: 3rem;

  > button {
    max-width: 10rem;
    margin-bottom: 1.6rem;
  }
`;

export const Content = styled.main`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  section {
    max-width: 50.2rem;
    width: 100%;
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

    .input-container {
      width: 100%;

      & + .input-container {
        margin-top: 1.6rem;
      }
    }
  }
`;

export const Form = styled.form`
  margin-bottom: 1.6rem;
  > button {
    margin-top: 1.6rem;
  }
`;
