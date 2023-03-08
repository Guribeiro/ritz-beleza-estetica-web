import styled from 'styled-components';

export const Container = styled.main`
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  section {
    max-width: 99.6rem;
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
        margin-left: 1.6rem;
      }

      @media (max-width: 630px) {
        & + .input-container {
          margin-left: 0;
          margin-top: 1.6rem;
        }
      }
    }
  }
`;

export const Form = styled.form`
  .row {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 1.6rem;

    @media (max-width: 630px) {
      flex-direction: column;
    }

    &.address {
      .input-container {
        &:first-child {
          width: 90%;
        }

        &:last-child {
          width: 10%;
        }

        @media (max-width: 630px) {
          &:first-child {
            width: 100%;
          }

          &:last-child {
            width: 100%;
          }
        }
      }
    }
  }
`;
