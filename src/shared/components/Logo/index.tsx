import styled from 'styled-components';

const Container = styled.div`
  > h3 {
    font-size: 4.2rem;
    font-family: 'Italiana', serif;
    color: ${({ theme }) => theme.colors.night};
  }

  > p {
    font-size: 1.6rem;
    font-family: 'Playfair Display', serif;
    color: ${({ theme }) => theme.colors.carrot_orange};
  }
`;

const Logo = (): JSX.Element => {
  return (
    <Container>
      <h3>RITZ</h3>
      <p>Beleza & Estética</p>
    </Container>
  );
};

export default Logo;
