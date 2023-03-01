import styled from 'styled-components';

export const Container = styled.section`
  min-height: 100vh;
  display: flex;
  background-color: ${({ theme }) => theme.colors.bone};

  > article {
    padding: 10rem 0 5rem;
    width: 100%;
    max-width: 980px;
    margin: 2.4rem auto 0;

    h2 {
      font-size: 3.2rem;
      text-align: center;
      width: 48rem;
      margin: 0 auto;
    }

    h3 {
      margin: 1.6rem 0;
      text-transform: uppercase;
      color: ${({ theme }) => theme.colors.carrot_orange};
      text-align: center;
    }
  }

  .map-wrapper {
    border-radius: 1rem;
    overflow: hidden;

    .map-container {
      width: 980px;
      height: 490px;
    }
  }

  p {
    margin-top: 1.6rem;
    font-size: 1rem;
    text-align: end;
  }
`;
