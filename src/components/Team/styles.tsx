import styled from 'styled-components';

export const Container = styled.section`
  min-height: 100vh;
  display: flex;
  /* background-color: ${({ theme }) => theme.colors.bone}; */

  > article {
    padding-top: 10rem;
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

    > article {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      position: relative;
      & > * {
        margin: 2rem 0;
      }

      > img {
        width: 30rem;
        height: 21.6rem;
      }

      > .circle {
        border: 1px solid ${({ theme }) => theme.colors.carrot_orange};
        position: absolute;
        bottom: -3rem;
        left: 50%;
        transform: translate(-50%);
        border-radius: 50%;

        height: 7rem;
        width: 7rem;
        transition: 300ms;

        &:hover {
          background-color: ${({ theme }) => theme.colors.carrot_orange};

          > a > span {
            transform: scale(1.05);
            &::after {
              border-color: ${({ theme }) => theme.colors.bone};
            }
          }
        }

        > a {
          span {
            position: absolute;
            font-size: 1.2rem;
            bottom: 30%;
            left: 10%;
            width: 13rem;
            color: ${({ theme }) => theme.colors.night};
            padding: 0.4rem 0;
            transition: 300ms;

            &::after {
              content: '';
              width: 2rem;
              border: 1px solid ${({ theme }) => theme.colors.carrot_orange};
              position: absolute;
              bottom: 0;
              left: 0;
              transition: 300ms;
            }
          }
        }
      }
    }
  }
`;
