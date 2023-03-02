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

    padding: 13rem 1.2rem 10rem;

    > article {
      width: 20rem;

      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: space-between;

      p {
        font-size: 1.2rem;
        color: ${({ theme }) => theme.colors.background};
        text-align: end;
      }

      ul {
        margin-top: 1.6rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;

        li > a {
          svg {
            transition: 300ms;
          }
          &:hover {
            & .whatsapp {
              color: #25d366;
            }
            & .instagram {
              color: #833ab4;
            }
            & .facebook {
              color: #4267b2;
            }
          }
        }
      }

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;

        border: 1px solid ${({ theme }) => theme.colors.background};
        border-radius: 0.8rem;
        svg {
          color: ${({ theme }) => theme.colors.background};
        }
      }

      > div {
        margin-top: 1.6rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 70%;
      }
    }
  }
`;
